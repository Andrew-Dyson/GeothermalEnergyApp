import matplotlib
# matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np

def createScatterPlot(x,y, name_for_title):
    plt.clf()
    plt.cla()
    x_ = np.array([x])
    y_ = np.array([y])
    colors = np.array(["green"])
    scatter = plt.scatter(x_, y_, c=colors)
    # plt.title('Temperature vs. Depth', fontsize=15, fontweight='bold')
    plt.title(f'{name_for_title}: Temperature vs. Depth', fontsize=15, fontweight='bold')
    plt.xlabel('Temperature (degrees c)', fontsize=15, fontweight='bold', labelpad=5)
    plt.ylabel('Depth (m)', fontsize=15, fontweight='bold', labelpad=5)
    
    plt.grid()
    plt.xscale("linear")
    plt.yscale("linear")
    plt.plot([x, 10],[y, 0])
    
    ax = scatter.axes
    
    ax.set_ylim((0,3000))
    ax.set_xlim((0,100))
    ax.invert_yaxis()
    plt.savefig('/Users/andrewdyson/Documents/Study/Codeclan_work/Capstone_Project/Project_Code/geothermal_energy_app/Client/public/Images/TestImage1.png')
    # # plt.show()