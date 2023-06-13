import matplotlib
# matplotlib.use('agg')
import matplotlib.pyplot as plt
import numpy as np

def createScatterPlot(input_array):
    plt.clf()
    plt.cla()
    
    colors = np.array(["red","magenta","green","blue","orange","black","purple","beige","brown","gray","cyan","yellow","pink"])
    regions = []
    counter = 0
    for array in input_array:
        temperature_array_for_regression = array[0]
        depth_array_for_regression = array[1]
        temperature_list = np.array(array[0])
        depth_list = np.array(array[1])
        temperature_array_for_regression.append(10)
        depth_array_for_regression.append(0)
        
        temperature_list_for_regression = np.array(temperature_array_for_regression)
        depth_list_for_regression = np.array(depth_array_for_regression)
        
        scatter = plt.scatter(temperature_list, depth_list, c=colors[counter], label=array[2])
        ax = scatter.axes
        ax.set_ylim((0,3000))
        ax.set_xlim((0,100))
        A = np.vstack([temperature_list_for_regression, np.ones(len(temperature_list_for_regression))]).T
        W = np.diag(np.ones([len(temperature_list_for_regression)]))
        W[-1,-1] = 1000.
        m, c = np.linalg.lstsq(np.dot(W, A), np.dot(W, depth_list_for_regression), rcond=None)[0]
        plt.plot(temperature_list_for_regression, m * temperature_list_for_regression + c, colors[counter])
        # p1 = np.polyfit(temperature_array_for_regression, depth_array_for_regression, 1)
        # plt.plot(temperature_list, b + m * temperature_list, '-')
        # xlims = plt.xlim()
        # temperature_array_for_regression.insert(10, xlims[0])
        # depth_array_for_regression.insert(0, np.polyval(p1, xlims[0]))
        # temperature_array_for_regression.append(xlims[1])
        # depth_array_for_regression.append(np.polyval(p1, xlims[1]))
        # plt.plot(temperature_array_for_regression, np.polyval(p1,temperature_array_for_regression), colors[counter], linewidth = 2)
        regions.append(array[2])
        counter += 1

    if len(regions) > 1:
        name_for_title = "All locations coloured by region: temperature vs. depth"  
    else:
        name_for_title = f'{regions[0]}: Temperature vs. Depth'

    # plt.title('Temperature vs. Depth', fontsize=15, fontweight='bold')
    plt.title(f'{name_for_title}', fontsize=14, fontweight='bold')
    plt.xlabel('Temperature (' + '\u00b0' + 'C)', fontsize=15, fontweight='bold', labelpad=5)
    plt.ylabel('Depth (m)', fontsize=15, fontweight='bold', labelpad=5)
    
    plt.grid()
    plt.xscale("linear")
    plt.yscale("linear")
    # plt.plot([10, 85],[0, 3000])
    
    
    ax.invert_yaxis()
    plt.legend(loc="lower left")
    plt.savefig('/Users/andrewdyson/Documents/Study/Codeclan_work/Capstone_Project/Project_Code/geothermal_energy_app/Client/public/Images/TestImage1.png', dpi = 300)
    # plt.show()