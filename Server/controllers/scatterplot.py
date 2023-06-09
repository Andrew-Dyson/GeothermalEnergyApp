import matplotlib
# matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np

def createScatterPlot(input_array):
    plt.clf()
    plt.cla()
    colors = np.array(["red","green","blue","magenta","orange","black","purple","beige","brown","gray","cyan","yellow","pink"])
    regions = []
    counter = 0
    for array in input_array:
        temperature_list = np.array(array[0])
        depth_list = np.array(array[1])
        scatter = plt.scatter(temperature_list, depth_list, c=colors[counter])
        regions.append(array[2])
        counter += 1

    if len(regions) > 1:
        name_for_title = "All locations grouped by region: temperature vs. depth"  
    else:
        name_for_title = f'{regions[0]}: Temperature vs. Depth'

    # plt.title('Temperature vs. Depth', fontsize=15, fontweight='bold')
    plt.title(f'{name_for_title}', fontsize=15, fontweight='bold')
    plt.xlabel('Temperature (degrees c)', fontsize=15, fontweight='bold', labelpad=5)
    plt.ylabel('Depth (m)', fontsize=15, fontweight='bold', labelpad=5)
    
    plt.grid()
    plt.xscale("linear")
    plt.yscale("linear")
    plt.plot([10, 85],[0, 3000])
    
    ax = scatter.axes
    
    ax.set_ylim((0,3000))
    ax.set_xlim((0,100))
    ax.invert_yaxis()
    plt.savefig('/Users/andrewdyson/Documents/Study/Codeclan_work/Capstone_Project/Project_Code/geothermal_energy_app/Client/public/Images/TestImage1.png')
    # # plt.show()