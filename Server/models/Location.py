

class Location:
    def __init__(self, name, elevation, id = None):
        self.name = name
        self.elevation = elevation
        self.depths = []
        self.id = id