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


def select(id):
    sql = "SELECT * FROM children WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)
    

    if len(results) > 0:
        selected_child = results[0]
        guardian = guardian_repository.select(selected_child['guardian_id'])
        room = room_repository.select(selected_child['room_id'])
        staff_member = staff_member_repository.select(selected_child['staff_member_id'])
        child = Child(selected_child['name'], selected_child['date_of_birth'], selected_child['allergies'], guardian, room, staff_member, selected_child['id'])
    return child
