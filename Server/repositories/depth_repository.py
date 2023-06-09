from db.run_sql import run_sql
from models.depth import *
import repositories.location_repository as location_repository



def save(depth):
    sql = "INSERT INTO depths(value, temperature, location_id) VALUES (%s, %s, %s) RETURNING *"
    values = [depth.value, depth.temperature, depth.location.id]
    results = run_sql(sql, values)
    id = results[0]['id']
    depth.id = id
    location_id = results[0]['location_id']
    depth.location = location_id
    return depth

def select_all():
    depths = []
    sql = "SELECT * FROM depths"
    results = run_sql(sql)
    for row in results:
        depth = Depth(row["value"], row["temperature"], row["location_id"], row["id"])
        depths.append(depth)
    return depths


def select_by_location_id(location_id):
    sql = "SELECT * FROM depths WHERE location_id = %s"
    values = [location_id]
    results = run_sql(sql, values)
    if len(results) > 0:
        selected_depth = results[0]
        location = location_repository.select_by_id(selected_depth['location_id'])
        output_depth = Depth(selected_depth['value'], selected_depth['temperature'], location, selected_depth['id'])
    return output_depth


def select_by_region(region):
    depths = []
    sql = "SELECT * from depths where location_id in (SELECT id from locations WHERE region = %s)"
    values = [region]
    results = run_sql(sql, values)

    for row in results:
        depth = Depth(row["value"], row["temperature"], row["location_id"], row["id"])
        depths.append(depth)
    return depths




