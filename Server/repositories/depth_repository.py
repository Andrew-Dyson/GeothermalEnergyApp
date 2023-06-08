from db.run_sql import run_sql
from models.depth import *


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



