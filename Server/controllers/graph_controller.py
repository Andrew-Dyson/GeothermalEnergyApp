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

graph_blueprint = Blueprint("data", __name__)

# @graph_blueprint.route('/graphdata')
# def get_graph():
#     print(f"request received")
#     return {"image": "TestImage1.png"}

@graph_blueprint.route('/data', methods=['POST'])
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

@graph_blueprint.route('/data/depths')
def get_all_depth_data():
    data = depth_repository.select_all()
    print(f"depth data request received")
    depths = []
    for depth_object in data:
        depths.append(
            {"depth_id": depth_object.id,
            "depth_value": depth_object.value,
            "temperature_value": depth_object.temperature,
            "depth_location_id": depth_object.location}
        )
    # print(depth_data)
    return depths

@graph_blueprint.route('/data/locations')
def get_all_location_data():
    data = location_repository.select_all()
    locations = []
    for location_object in data:
        locations.append(
            {"location_id": location_object.id,
            "location_name": location_object.name,
            "region": location_object.region}
        )
    return locations

@graph_blueprint.route('/data/locations/location', methods=['POST'])
def get_specific_location_data():
    print(request.json["location_id"])
    location_id = request.json["location_id"]
    depth_data = depth_repository.select_by_location_id(location_id)
    createScatterPlot(int(depth_data.temperature), int(depth_data.value), depth_data.location.name)
    # return depth_data.location.name
    return {"message": "location request received"}
   

@graph_blueprint.route('/data/locations/region', methods=['POST'])
def get_specific_region_data():
    print(request.json["Region_name"])
    region_to_find = request.json["Region_name"]
    depth_data = depth_repository.select_by_region(region_to_find)
    temperature_list = return_temperature_data(depth_data)
    depth_list = return_depth_data(depth_data)
   
    createScatterPlot(temperature_list, depth_list, region_to_find)
    return {"message": "region request received"}
    

@graph_blueprint.route('/data/locations/alllocationsbyregion')
def get_all_locations_by_region():
    print("all locations by region request received")
    # region_to_find = request.json["Region_name"]
    # depth_data = depth_repository.select_by_region(region_to_find)
    # temperature_list = return_temperature_data(depth_data)
    # depth_list = return_depth_data(depth_data)
   
    # createScatterPlot(temperature_list, depth_list, region_to_find)
    return {"message": "plot all locations by region - request received"}
    


