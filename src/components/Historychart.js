import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import axios from "axios";

//https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Historychart = () => {
  const { id } = useParams();

  const [coin1, setCoin1] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${coins.id}/market_chart?vs_currency=usd&days=7`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin1(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, []);

  const coinChartdata = coin1.prices.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2),
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: coinChartdata.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartdata.map((val) => val.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data}></Line>
    </div>
  );
};

export default Historychart;
