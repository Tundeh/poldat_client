import React, {useLayoutEffect, useRef} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import amthemes_animated from "@amcharts/amcharts4/themes/animated"

am4core.useTheme(amthemes_animated);

const PieChart = (props) => {
  const chart = useRef(null);  

useLayoutEffect(() => {
  let x = am4core.create("piechartdiv", am4charts.PieChart);

// Add data
x.data = [ {
  "gender": "Male",
  "members": 6043,
  "color": am4core.color("#53378E")
}, {
  "gender": "female",
  "members": 9200,
  "color": am4core.color("#78315C")
}];

// Add and configure Series
let pieSeries = x.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "members";
pieSeries.dataFields.category = "gender";
pieSeries.slices.template.propertyFields.fill = "color";
x.legend = new am4charts.Legend();
chart.current = x;
  return () => {
    x.dispose();
  };
}, [])
  
return  <div id="piechartdiv" style={{width: "100%", height: "300px" }}></div>
}

export default PieChart;