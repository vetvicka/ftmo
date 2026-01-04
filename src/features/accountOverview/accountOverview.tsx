import { AccountCard } from '../../ui/components/accountCard/accountCard';
import { useAccountData } from '../../api';

const badges = [
  {
    text: 'Ongoing',
  },
  {
    text: 'FTMO Challenge',
    outline: true,
  },
];

export function AccountOverview() {
  const { accountData, balanceCurve, loading, error } = useAccountData();

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
    />
  );
}
