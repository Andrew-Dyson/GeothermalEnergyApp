

class Depth:
    def __init__(self, value, temperature, location, id = None):
        self.value = value
        self.temperature = temperature
        self.location = location
        self.id = id

def return_temperature_data(list_of_depth_objects):
    temperature_data_for_scatter = []
    for depth in list_of_depth_objects:
        temperature_data_for_scatter.append(depth.temperature)
    return temperature_data_for_scatter

def return_depth_data(list_of_depth_objects):
    depth_data_for_scatter = []
    for depth in list_of_depth_objects:
        depth_data_for_scatter.append(depth.value)
    return depth_data_for_scatter



    
