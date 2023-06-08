from db.run_sql import run_sql
from models.location import *

def save(location):
    sql = "INSERT INTO locations(name, region) VALUES (%s, %s) RETURNING *"
    values = [location.name, location.region]
    results = run_sql(sql, values)
    id = results[0]['id']
    location.id = id
    return location

def select_all():
    locations = []
    sql = "SELECT * FROM locations"
    results = run_sql(sql)
    for row in results:
        location = Location(row["name"], row["region"], row["id"])
        locations.append(location)
    return locations





