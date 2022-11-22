# UFO-Sightings-and-JavaScript
Using Python and JavaScript to analyze UFO sightings.
<br/>
<p align="center">Tyrone Fraley<br/>
UC Berkley Extension<br/>
August 31, 2022<br/>
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="../Images/Ancient%20Aliens.jpeg">
</p>
<br/>
## Overview of the Analysis
For this analysis I helped build a dynamic table on a webpage. The table displays information regarding UFO sightings around the world. To create this interactive table I used html, CSS, Bootstrap, and JavaScript. With the help of JavaScript I could store the data as an array, or list. The dynamic table would allow users to be able to analyze UFO sightings through filter options  that include the date, city, state, contury, and shape of the unidentified aircraft.

### Results
To kick off the study on the right start I used a data.js file which included a long list of variables. These variables were date time, city, state, country, shape of the air craft, duration of minutes, and any comments from UFO witnesses at that specific event. To further the analysis it was important to import the data.js file into the index.html file which would broadcast the data into the dynamic table. To do this I created an app.js file which would start by using JavaScript functions to gather data from teh data file. This was done by using "const tableData= data;" as my preliminary function. I then began to build a table what would select the tbody area of the html file. Building the tabe (function buildTable(data) was an action where I looped through each object in the data and then appended the rows to the table body of the html file. I then looped through every field in the dataRow to obtain each value from the table cell (included in the td section). This was done through using a loop based on Object.values(dataRow).forEach((val)=>{ let cell = row.append("td"); cell.text(val);});});}. This may seem like a lot of code so I will break this code down. Within the Object.values() function I am returning an array of values from the dataRow. I then iterate through each of the values using the .forEach() function and pass a callback function. In let cell = row.append("td") I am using the append() method to add a new HTML element to the page. In this moment I am adding a new table cell to the row. The td argument within .append() is able to specify that the new element I am using is will be a table data element. Let allows me to create a variable named cell. Which will then store the new table cell element I created. Within the callback function I am creating a new table with the help of d3.append() and set the cells' text with cell.text(val).

<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="../Images/buildTable.jpeg">
</p>
<br/>
Next in the anlaysis I wanted to be able to filter through the data in the table. This was done by first creating a variable (var filters={};). This allows me to compartmentalize all of the filters that I have active. Now, a filter is an object that contains value types of the filter and its value. The type of filter has a name of the filter (think date or city) and a value is the parameter that the filter takes on (think dat: 01,10,2010). So in this case the value for city could be "Phoenix." The type of filter used could be text or select and a filter with text as the type will refer to rows that have a value equal to the value of the filter of a specific column. 
To save teh elements that were changed as a variable I used var changedElement = d3.select(this), var elementValue = changedElement.property("value"), and var filterId = changedElement.attr("id"). When analysing the first line of code to save the element that was changed into a variable (var changedElement = d3.select(this);). I assigned changedElement as a variable and used d3.select(this) to select the element that was going to change. The element subject to change was then stored as the changedElement variable. Then I assigned a new variable called elementValue which would declare and initialize the value within the changedElement variable. The value property of changedElement was set as the value within the text field. So at this point I have saved the element that was changed as a variable (changedElement) and the value that was changed as a variable (elementValue). Both were logged immediately after declaring each variable through console.log(). The same process was done to create the filter id. At this point, it was necessary to use an if statement to ensure the data was properly represented. What this means is if a filter value is entered (date) then the table would add the filter id and the value to the filters' list. However, if there items that did not match the desired filter then those items would be removed from the table. The code below demonstrates how this process was acheived. 
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="../Images/filter.jpeg">
</p>
<br/>
Near the end of the coding process for the app.js file I created a variable to set the filtered data to the table data (var filteredData = tableData;). I thne looped through all of the filters and saved data that matched the filtered values. This was done by coding : Object.entries(filters).forEach(([key, value]) =>{ filteredData = filteredData.filter(row => row[key] === value);}];. I then used tableBuild(filteredData) to rebuild the table with filtered data. Then I used d3.selectAll("input").on("change", updateFilters) to attatch any events to be aware of changes to the filters. Finally, buildTable(tableData) was used to build the table once the page loads. In the body of the html file I used <script src="static/js/app.js"></script> and <script src="static/js/data.js"></script> to load the data table into the webpage. 
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="../Images/dynamictable.jpeg">
</p>
<br/>
### Summary
This analysis was a lot of fun and added some fascinating new tools I can use in the future. There is a draw back in the study though, I think the dynamic table needs to be more interactive. Some filters should have an ability to show you what element they have. For instance, the "city" doesn't tell you what cities are in the data set. This can cause some confusion or unnecessary key strokes to find desired UFO info based on a desired city that may not exist in the data set. I would recommend appending specific cities and countries to the filter table in a list format when the filters are clicked. This way the user knows exactly what elements are within that filter. In addition, I would recommend an export to csv option in a button format. This way someone can filter the table and export what they filtered to a csv file. 
<p/>
<br/>
<p align="center">
  <img width="460" height="200" src="../Images/ufo.jpeg">
</p>
<br/>



