from db.run_sql import run_sql
from models.depth import *


def save(depth):
    sql = "INSERT INTO depths(value, temperature, location_id) VALUES (%s, %s, %s) RETURNING *"
    values = [depth.value, depth.temperature, depth.location]
    results = run_sql(sql, values)
    id = results[0]['id']
    depth.id = id
    return depth


# def save(child):
#     sql = "INSERT INTO children(name, date_of_birth, allergies, guardian_id, room_id, staff_member_id, childs_age) VALUES (%s, %s, %s, %s, %s, %s, %s) RETURNING *"
#     DOB = child.convert_date_of_birth()
#     childs_age = child.calculate_age_years_months(DOB)
#     values = [child.name, child.date_of_birth, child.allergies, child.guardian.id, child.room.id, child.staff_member.id, childs_age]
#     results = run_sql(sql, values)
#     id = results[0]['id']
#     child.id = id
#     return child