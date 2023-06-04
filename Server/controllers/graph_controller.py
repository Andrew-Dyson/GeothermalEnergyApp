import matplotlib
matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np
from flask import Flask, request
from flask_cors import CORS
from graphs.scatterplot import *


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/graphdata')
def get_graph():
    print(f"request received")
    return {"image": "Images/TestImage2.png"}

@app.route('/graphdata', methods=['POST'])
def create_graph():
    print(request.json["temperature"])
    createScatterPlot(3,2)
    return {"image": "Images/TestImage1.png"}

# @children_blueprint.route("/children", methods=['POST'])
# def register_child():
#     name = request.form['name']
#     date_of_birth = request.form['date_of_birth']
#     allergies = request.form['allergies']
#     guardian_id = request.form['guardian_id']
#     guardian = guardian_repository.select(guardian_id)
#     staff_members = staff_member_repository.select_all()
#     rooms = room_repository.select_all()

# @app.route('/graphdata/id')
# def create_graph():
#     print(f"request received")
