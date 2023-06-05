import matplotlib
# matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np

def createScatterPlot(x,y):
    x = np.array([x])
    y = np.array([y])
    colors = np.array(["magenta"])
    
    plt.scatter(x, y, c=colors)
    plt.savefig('/Users/andrewdyson/Documents/Study/Codeclan_work/Capstone_Project/Project_Code/geothermal_energy_app/Client/public/Images/TestImage1.png')
    plt.close()
# createScatterPlot(2,3)


