from db.run_sql import run_sql


def save(location):
    sql = "INSERT INTO locations(name, elevation) VALUES (%s, %s) RETURNING *"
    values = [location.name, location.elevation]
    results = run_sql(sql, values)
    id = results[0]['id']
    location.id = id
    return location

