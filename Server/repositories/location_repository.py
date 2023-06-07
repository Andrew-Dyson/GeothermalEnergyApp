from db.run_sql import run_sql


def save(location):
    sql = "INSERT INTO locations(name, region) VALUES (%s, %s) RETURNING *"
    values = [location.name, location.region]
    results = run_sql(sql, values)
    id = results[0]['id']
    location.id = id
    return location



# def select_all():
#     guardians = []
#     sql = "SELECT * FROM guardians"
#     results = run_sql(sql)
#     for row in results:
#         guardian = Guardian(row['name'], row['contact_number'], row['id'])
#         guardians.append(guardian)
#     return guardians

# def select(id):
#     guardian = None
#     sql = "SELECT * FROM guardians WHERE id = %s"
#     values = [id]
#     results = run_sql(sql, values)

#     if results:
#         result = results[0]
#         guardian = Guardian(result['name'], result['contact_number'], result['id'] )
#     return guardian