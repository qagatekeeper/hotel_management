import "./barChart.css";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: true,
};

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

export const data = {
  labels,
  datasets: [
    {
      label: "2022-07-01 Profit:32",
      data: [12, -19, -3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BarChart = ({ data }) => {
  return (
    <>
      <Bar
        data={{
          labels: data.map((item) => item.checkOutDate),
          datasets: [
            {
              label: "Profit",
              data: data.map((date) => date.profit),
              backgroundColor: "rgb(255, 99, 132)",
            },
          ],
        }}
        options={options}
      />
    </>
  );
};

export default BarChart;
