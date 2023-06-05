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

@graph_blueprint.route('/graphdata')
def get_graph():
    print(f"request received")
    return {"image": "TestImage1.png"}

@graph_blueprint.route('/graphdata', methods=['POST'])
def create_graph():
    print(request.json["name"])
    name = request.json["name"]
    elevation = request.json["elevation"]
    temperature = request.json["temperature"]
    value = request.json["depth"]
    createScatterPlot(temperature, value)
    location = Location(name, elevation)
    location_saved = location_repository.save(location)
    depth = Depth(value, temperature, location_saved.id)
    depth_repository.save(depth)
    return {"image": "TestImage1.png"}
    # return redirect("/graphdata")

# @app.route('/graphdata/id')
# def create_graph():
#     print(f"request received")
