## Bar chart
The bar chart shows different levels of mortality risk across age groups and gender. The labels for the chart were generated by the function "mortalityCategory", and the age groups were generated by the funciton "ageGroups". To seperate mortality risk data for males from females, I used the function "maleCount" to calculate the numbers for males and stored them in an array, then the function "femaleCount" deducts the numbers in the maleCount array from the total number in order to get the numbers for females. 

## Pie Chart
The pie chart shows the number of pancreas cancer cases per race. However, after finishing the project I realized this visualization doesn't reveal anything interesting. The predominant case number from whites can be explained by the fact most population in the dataset is white. Nonetheless, it does at least show this cancer type isn't related to any particular race. 

## Polar Area Chart
The polar area chart shows the top 5 cancer types sorted by the number of emergency visits to the hospitals. Perhaps the frequency of emergency visits can tell us which cancer is more unpredictable and has to be monitored more closely. However, I feel addtional information is needed. So far we don't know how many cases each cancer type has. It is possible that the number of emergency visits is related to the number of cancer cases of a particular type rather than the unpredictable nature of the cancer. 

## Libraries/Tools used
I used Bootstrap 4 for styling and Chart.js for the visualizations. Specifically I used version 3.2.1 of Chart.js.

## Decisions and tradeoffs
For the data size, I decided to limit the results to 10,000. I feel this is sufficiently large enough for the data to be representative but not too large as to slow down the rendering of the visualizations, which could affect the user experience. 
Personally, I would avoid using pie charts or donut charts for data visualization. They can be misleading. The main reason why I chose pie chart for one of the data visualization was because I wanted to use a variety of visualizations for this project. In addition, two of them are static and one of them is interactive. For example, I added additional interactivity to the bar chart. The user can filter the data by clicking the "combined", "male", or "female" button. This functionality reveals additional insights from the data. 


