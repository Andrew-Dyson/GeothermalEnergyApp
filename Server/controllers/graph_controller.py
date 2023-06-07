import matplotlib
matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np
from flask import Flask, request, redirect, Blueprint
from flask_cors import CORS
from controllers.scatterplot import *
from models.location import *
from models.depth import *
import repositories.location_repository as location_repository
import repositories.depth_repository as depth_repository

graph_blueprint = Blueprint("graphdata", __name__)

# @graph_blueprint.route('/graphdata')
# def get_graph():
#     print(f"request received")
#     return {"image": "TestImage1.png"}

@graph_blueprint.route('/graphdata', methods=['POST'])
def create_graph():
    print(request.json["name"])
    name = request.json["name"]
    region = request.json["region"]
    temperature = int(request.json["temperature"])
    value = int(request.json["depth"])
    createScatterPlot(temperature, value)
    location = Location(name, region)
    location_saved = location_repository.save(location)
    depth = Depth(value, temperature, location_saved.id)
    depth_repository.save(depth)
    return {"image": "TestImage1.png"}
    # return redirect("/graphdata")

@graph_blueprint.route('/graphdata')
def get_data():
    data = depth_repository.select_all()
    print(f"data request received")
    depth_data = []
    for depth_object in data:
        depth_data.append(
            {"depth_id": depth_object.id,
            "depth_value": depth_object.value,
            "temperature_value": depth_object.temperature,
            "depth_location_id": depth_object.location}
        )
    # print(depth_data)
    return depth_data


# @app.route('/graphdata/id')
# def create_graph():
#     print(f"request received")
