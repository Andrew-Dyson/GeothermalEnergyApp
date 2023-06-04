import matplotlib.pyplot as plt
import numpy as np

x = np.array([8,7,2,17,2,9,4,11,12,9,6])
y = np.array([87,88,111,86,103,87,94,78,77,85,86])
colors = np.array(["blue","yellow","pink","black","orange","purple","beige","brown","gray","cyan","magenta"])

plt.scatter(x, y, c=colors)
plt.savefig('/Users/andrewdyson/Documents/Study/Codeclan_work/Capstone_Project/Project_Code/geothermal_energy_app/Client/public/Images/TestImage3.png')
# plt.show()

