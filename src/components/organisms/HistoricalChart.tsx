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

  console.log(cssvar("--twc-graphs-line"));

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
                color: cssvar("--twc-text"),
              },
              type: "time",
              time: {
                unit: "month",
              },
            },
            y: {
              grid: {
                color: cssvar("--twc-text", 0.2),
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
              borderColor: cssvar("--twc-graphs-line"),
              borderWidth: 1,
            },
          ],
          labels: [],
        }}
      />
    </Box>
  );
};

function cssvar(name: string, alpha = 1) {
  const computedName = getComputedStyle(
    document.documentElement
  ).getPropertyValue(name);

  const split = computedName.split(" ");
  if (split.length < 4) return "rgb(0,0,0)";

  const H = +split[1];
  const S = +split[2].replace("%", "");
  const L = +split[3].replace("%", "");

  const val = HSLToRGB(H, S, L);
  return `rgba(${val}, ${alpha})`;
}

const HSLToRGB = (h: number, s: number, l: number) => {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [255 * f(0), 255 * f(8), 255 * f(4)];
};

const hex2rgba = (hex: string, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g)!.map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
