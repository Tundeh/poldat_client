import React, {useLayoutEffect, useRef} from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);
const BarChart = (props) => {
  let chart = useRef(null);

 useLayoutEffect(() => {
  
  
 // Create chart instance
let x = am4core.create("barchart", am4charts.XYChart);
x.paddingRight = 20;
// Add data

x.data = [{"age group": "18 - 30", "members": 24000},
 {"age group": "30 - 44", "members": 42034},
{"age group": "45 - 64", "members": 35042},
{"age group": "> 65", "members": 25532}
]
// Create axes
let categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "age group";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
  if (target.dataItem && target.dataItem.index & 2 == 2) {
    return dy + 25;
  }
  return dy;
});

let valueAxis = x.yAxes.push(new am4charts.ValueAxis());

// Create series
let series = x.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "members";
series.dataFields.categoryX = "age group";
series.name = "members";
series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
series.columns.template.fillOpacity = .8;

let columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
chart.current = x;
return () => {
  x.dispose();
};
}, [])
 
return (
 <div id="barchart" style={{ width: "100%", height: "300px" }}></div>
)

}

export default BarChart;