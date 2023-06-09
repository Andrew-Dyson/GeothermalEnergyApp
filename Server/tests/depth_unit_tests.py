import unittest

from models.depth import *
from models.location import *


class TestDepth(unittest.TestCase):
    def setUp(self):
        self.Altnabreac_1 = Location("Altnabreac_1", "Caithness")
        self.depth_299 = Depth(299, 10.3, self.Altnabreac_1)
        self.depth_301 = Depth(301, 8.8, self.Altnabreac_1)
        self.depth_282 = Depth(282, 10.1, self.Altnabreac_1)
        self.depths = [self.depth_299, self.depth_301, self.depth_282]

    def test_depth_has_a_temperature(self):
        self.assertEqual(8.8, self.depth_301.temperature)

    def test_can_get_temperature_list(self):
       temperature_list = return_temperature_data(self.depths)
       self.assertEqual([10.3, 8.8, 10.1], temperature_list)

    def test_can_get_depths_list(self):
       depths_list = return_depth_data(self.depths)
       self.assertEqual([299, 301, 282], depths_list)


        

