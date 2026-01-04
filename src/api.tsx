// naive data fetching for the demo, just some place to put the code and types
import { useState, useEffect } from 'react';

type AccountData = {
  login: number;
  equity: number;
  balance: number;
  currentDailyProfit: number;
};

export type BalanceCurveData = {
  balance: number[];
  time: string[];
};

export function useAccountData() {
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [balanceCurve, setBalanceCurve] = useState<BalanceCurveData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // not a production code, good enough for this demo 🤷
    let ignore = false;
    const fetchData = async () => {
      if (import.meta.env.DEV) {
        const accountStaticMock = await import('./mock/account.json');
        const balanceCurveStaticMock = await import('./mock/balanceCurve.json');
        setAccountData(accountStaticMock);
        setBalanceCurve(balanceCurveStaticMock);
        setLoading(false);
        return;
      }
      try {
        const [accountResponse, balanceResponse] = await Promise.all([
          fetch('https://mock-api.net/api/ftmo/account'),
          fetch('https://mock-api.net/api/ftmo/balancecurve'),
        ]);
        if (!accountResponse.ok || !balanceResponse.ok) {
          throw new Error('Failed to fetch mocked data');
        }
        const accountJson = await accountResponse.json();
        const balanceJson = await balanceResponse.json();
        if (ignore) return;
        setAccountData(accountJson);
        setBalanceCurve(balanceJson);
      } catch (err) {
        setError(`${err}`);
      }

      setLoading(false);
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, []);

  return { accountData, balanceCurve, loading, error };
}
