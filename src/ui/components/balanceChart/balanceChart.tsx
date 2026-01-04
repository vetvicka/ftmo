import { scaleLinear, scaleTime } from 'd3-scale';
import { extent } from 'd3-array';
import { line, area } from 'd3-shape';

type BalanceChartProps = {
  width?: number;
  height?: number;
};

const dummyData2 = [
  { x: '2025-01-15T00:00:00Z', y: 100000 },
  { x: '2025-01-15T06:00:00Z', y: 100250 },
  { x: '2025-01-15T12:00:00Z', y: 100500 },
  { x: '2025-01-15T18:00:00Z', y: 100750 },
  { x: '2025-01-16T00:00:00Z', y: 101000 },
  { x: '2025-01-16T06:00:00Z', y: 101200 },
  { x: '2025-01-16T12:00:00Z', y: 101400 },
  { x: '2025-01-16T18:00:00Z', y: 101600 },
  { x: '2025-01-17T00:00:00Z', y: 101800 },
  { x: '2025-01-17T06:00:00Z', y: 102000 },
  { x: '2025-01-17T12:00:00Z', y: 102200 },
  { x: '2025-01-17T18:00:00Z', y: 102400 },
  { x: '2025-01-18T00:00:00Z', y: 102500 },
];

export function BalanceChart({ width = 88, height = 48 }: BalanceChartProps) {
  const scaleX = scaleTime()
    .domain(extent(dummyData2, (d) => new Date(d.x)) as [Date, Date])
    .range([0, width]);

  const yExtent = extent(dummyData2, (d) => d.y) as [number, number];
  const scaleY = scaleLinear().domain(yExtent).range([height, 0]);

  const lineGenerator = line<{ x: string; y: number }>()
    .x((d) => scaleX(new Date(d.x)))
    .y((d) => scaleY(d.y));

  const pathData = lineGenerator(dummyData2);

  const areaGenerator = area<{ x: string; y: number }>()
    .x((d) => scaleX(new Date(d.x)))
    .y1((d) => scaleY(d.y))
    .y0(height);

  const areaData = areaGenerator(dummyData2);

  // just a dummy random threshold. Since I don't know to which value this corresponds in the mocked data.
  const thresholdValue = Math.random() * (yExtent[1] - yExtent[0]) + yExtent[0];
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
