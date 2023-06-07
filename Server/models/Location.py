

class Location:
    def __init__(self, name, region, id = None):
        self.name = name
        self.region = region
        self.depths = []
        self.id = id