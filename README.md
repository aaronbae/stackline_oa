# stackline_oa
This is a project was an assignment given from Stackline Inc., and the goal was to design a SPA that looks like the following screenshot:

![Screen shot of the goal](https://raw.githubusercontent.com/aaronbae/stackline_oa/main/Webdev_Stackline%20screenshot.png)

## Project Requirements:
1. Must use Redux to share data
2. Must use local json file to read in data
3. Must look similar to the given screenshot

## Live Page
You can check out the finished page in this [link](https://stackline-oa.herokuapp.com/)

## Features Completed
1. A button to the same home page via "Stackline logo"
2. A table that can be sorted by the column
3. "view_index" variable in "/redux/productSlice.js" allows for different product selection (if the Webdev_data2.json file had more than 1 product)
4. Async fetching for Webdev_data2.json file 

## Features that could Improve the Page:
1. Reverse sorting the columns via toggling
2. Have the sorting be a redux action, so that sorting impacts the charts
3. clickable "SALES" tab on the left (assuming that there will be more tabs than just SALES in the future)
4. responsive to mobile views
5. create Layout component if we were to create more than a single page
6. Tooltip for the line chart
7. A redux action for selecting different products
8. A navigation to select different products (again, given that there are more than one product in future "Webdev_data2.json" files)


