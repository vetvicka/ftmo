import type { BalanceCurveData } from '../../api';
import type { ChartDataPoint } from '../../ui/components/balanceChart/balanceChart';

// could be also moved closer to the data fetching layer. Dpends if BalanceCurveData is used anywhere else.
export function transformChartData(balanceCurve: BalanceCurveData | null): ChartDataPoint[] {
  if (!balanceCurve) return [];
  const { balance, time } = balanceCurve;
  const chartData: ChartDataPoint[] = [];
  for (let i = 0; i < balance.length; i++) {
    chartData.push({ x: time[i], y: balance[i] });
  }
  return chartData;
}
