import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import * as Highcharts from "highcharts";

const LineChart = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "areaspline",
      },
      title: {
        text: "Line Chart POC",
      },
      legend: {
        layout: "vertical",
        align: "left",
        verticalAlign: "top",
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
      },
      xAxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        plotBands: [
          {
            // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: "rgba(68, 170, 213, .2)",
          },
        ],
      },
      yAxis: {
        title: {
          text: "Fruit units",
        },
      },
      tooltip: {
        shared: true,
        valueSuffix: " units",
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        areaspline: {
          fillOpacity: 0.5,
        },
      },
      series: [
        {
          name: "John",
          data: [3, 4, 3, 5, 4, 10, 12],
        },
        {
          name: "Jane",
          data: [1, 3, 4, 3, 3, 5, 4],
        },
      ],
    });

    setTimeout(() => {
      //alert("Working As ComponentDidMount");
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <figure class="highcharts-figure">
        <div id="container"></div>
      </figure>
    </React.Fragment>
  );
};

export default LineChart;

// import React, { Component } from "react";
// import * as ReactDOM from "react-dom";
// import * as Highcharts from "highcharts";
// //const LineChart = () => {

// class LineChart extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     Highcharts.chart("container", {
//       chart: {
//         type: "areaspline",
//       },
//       title: {
//         text: "Average fruit consumption during one week",
//       },
//       legend: {
//         layout: "vertical",
//         align: "left",
//         verticalAlign: "top",
//         x: 150,
//         y: 100,
//         floating: true,
//         borderWidth: 1,
//         backgroundColor:
//           Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
//       },
//       xAxis: {
//         categories: [
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//           "Sunday",
//         ],
//         plotBands: [
//           {
//             // visualize the weekend
//             from: 4.5,
//             to: 6.5,
//             color: "rgba(68, 170, 213, .2)",
//           },
//         ],
//       },
//       yAxis: {
//         title: {
//           text: "Fruit units",
//         },
//       },
//       tooltip: {
//         shared: true,
//         valueSuffix: " units",
//       },
//       credits: {
//         enabled: false,
//       },
//       plotOptions: {
//         areaspline: {
//           fillOpacity: 0.5,
//         },
//       },
//       series: [
//         {
//           name: "John",
//           data: [3, 4, 3, 5, 4, 10, 12],
//         },
//         {
//           name: "Jane",
//           data: [1, 3, 4, 3, 3, 5, 4],
//         },
//       ],
//     });
//   }
//   render() {
//     return (
//       <React.Fragment>
//         <figure class="highcharts-figure">
//           <div id="container"></div>
//           <p class="highcharts-description">
//             This demo shows a smoothed area chart with an x-axis plot band
//             highlighting an area of interest at the last two points. Plot bands
//             and plot lines are commonly used to draw attention to certain areas
//             or thresholds.
//           </p>
//         </figure>
//       </React.Fragment>
//     );
//   }
// }

// export default LineChart;
