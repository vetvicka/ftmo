import { scaleLinear, scaleTime } from 'd3-scale';
import { extent } from 'd3-array';
import { line, area } from 'd3-shape';

export type ChartDataPoint = { x: string; y: number };

type BalanceChartProps = {
  width?: number;
  height?: number;
  data: ChartDataPoint[];
};

// just for the demo, this would be replaced by real data.
const r = Math.random();

export function BalanceChart({ width = 88, height = 48, data }: BalanceChartProps) {
  const scaleX = scaleTime()
    .domain(extent(data, (d) => new Date(d.x)) as [Date, Date])
    .range([0, width]);

  const yExtent = extent(data, (d) => d.y) as [number, number];
  const scaleY = scaleLinear().domain(yExtent).range([height, 0]);

  const lineGenerator = line<{ x: string; y: number }>()
    .x((d) => scaleX(new Date(d.x)))
    .y((d) => scaleY(d.y));

  const pathData = lineGenerator(data);

  const areaGenerator = area<{ x: string; y: number }>()
    .x((d) => scaleX(new Date(d.x)))
    .y1((d) => scaleY(d.y))
    .y0(height);

  const areaData = areaGenerator(data);

  // just a dummy random threshold. Since I don't know to which value this corresponds with in the mocked data.
  const thresholdValue = r * (yExtent[1] - yExtent[0]) + yExtent[0];
  const thresholdY = scaleY(thresholdValue);

  if (!pathData || !areaData) return null;

  return (
    <svg width={width} height={height}>
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00C7B4" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#00C7B4" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={pathData} stroke="#00C7B4" strokeWidth="1.5" fill="none" />
      <path d={areaData} stroke="none" strokeWidth="1.5" fill="url(#chartGradient)" />
      <line
        x1={0}
        x2={width}
        y1={thresholdY}
        y2={thresholdY}
        stroke="#00C7B4"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
