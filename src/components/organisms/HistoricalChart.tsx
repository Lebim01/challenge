"use client";

import { useCicadaContext } from "@/context/CicadaContext";
import { useCicadaHistorical } from "@/hooks/useCicadaHistorical";
import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-moment";
import { Line } from "react-chartjs-2";
import { Box } from "../atoms/Box";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);
export const HistoricalChart = () => {
  const { pairJoined } = useCicadaContext();
  const { data } = useCicadaHistorical(pairJoined);

  const dataChart = useMemo(() => {
    const serie = Object.entries(data?.["Time Series FX (Daily)"] || {}).map(
      ([date, value]) => {
        const median =
          (+Number(value["2. high"]) + Number(value["3. low"])) / 2;

        return { x: new Date(date), y: median };
      }
    );
    return serie;
  }, [data]);

  return (
    <Box className="min-h-[512px] h-full p-3">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: fullConfig.theme.colors.text,
              },
              type: "time",
              time: {
                unit: "month",
              },
            },
            y: {
              grid: {
                color: hex2rgba(fullConfig.theme.colors.text, 0.2),
              },
              position: "right",
            },
          },
        }}
        data={{
          datasets: [
            {
              label: "Price",
              data: dataChart,
              borderColor: fullConfig.theme.colors.graphs.line,
              borderWidth: 1,
            },
          ],
          labels: [],
        }}
      />
    </Box>
  );
};

const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
