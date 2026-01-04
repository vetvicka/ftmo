import { useMemo } from 'react';
import { AccountCard } from '../../ui/components/accountCard/accountCard';
import { useAccountData } from '../../api';
import { transformChartData } from './transformChartData';

// hardoceded for the demo
const badges = [
  {
    text: 'Ongoing',
  },
  {
    text: 'FTMO Challenge',
    outline: true,
  },
];

const menuItems = [
  { label: 'Credentials', link: '#' },
  { label: 'Metrix', link: '#' },
  { label: 'Live MetriX', link: '#' },
  { label: 'Mentor', link: '#' },
  { label: 'Analysis', link: '#' },
];

export function AccountOverview() {
  const { accountData, balanceCurve, loading, error } = useAccountData();
  const chartData = useMemo(() => transformChartData(balanceCurve), [balanceCurve]);

  if (loading) return <div>Loading...</div>;
  if (error || !accountData) return <div>Error: {error}</div>;

  return (
    <AccountCard
      equity={accountData.equity}
      balance={accountData.balance}
      currentDailyProfit={accountData.currentDailyProfit}
      login={accountData.login}
      unrealizedPnL={accountData.equity - accountData.balance}
      badges={badges}
      menuItems={menuItems}
      chartData={chartData}
    />
  );
}
