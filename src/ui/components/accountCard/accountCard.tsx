import { Badge } from '../../primitives/badge/badge';
import { Badges } from '../../primitives/badges/badges';
import { LinkButton } from '../../primitives/linkButton/linkButton';
import { Card } from '../card/card';
import { CardHeader } from '../card/cardHeader';
import { CardBody } from '../card/cardBody';

import styles from './accountCard.module.css';
import { StatsHighlight } from '../statsHighlight/statsHighlight';
import { Button } from '../../primitives/button/button';
import { BalanceChart, type ChartDataPoint } from '../balanceChart/balanceChart';

export type Badge = {
  text: string;
  outline?: boolean;
};

export type MenuItems = {
  label: string;
  link: string;
};

type AccountCardProps = {
  currentDailyProfit: number;
  equity: number;
  balance: number;
  login: number;
  unrealizedPnL: number;
  badges?: Badge[];
  menuItems: MenuItems[];
  chartData: ChartDataPoint[];
};

export function AccountCard({
  currentDailyProfit,
  balance,
  equity,
  login,
  unrealizedPnL,
  badges,
  menuItems,
  chartData,
}: AccountCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className={styles.accountHeader}>
          <Badges>
            {badges?.map((badge) => (
              // assuming duplicate banges do not happen
              <Badge key={badge.text} outline={badge.outline}>
                {badge.text}
              </Badge>
            ))}
          </Badges>
          <div>
            <span className="lg body">Login: </span>
            <span className="lg heading">{login}</span>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className={`md ${styles.balanceInfo}`}>
          <div>
            <span className="label">Balance: </span>
            <span className="heading">{balance}</span>
          </div>
          <div>
            <span className="label">End: </span>
            <span className="heading">-</span>
          </div>
          <div>
            <span className="label">Result: </span>
            <span className="active">Ongoing</span>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.mainMenu}>
            <div className={`${styles.menuItem} ${styles.chart}`}>
              <BalanceChart data={chartData} />
            </div>
            {menuItems.map((item) => (
              <div key={item.label} className={`${styles.menuItem}`}>
                <LinkButton>{item.label}</LinkButton>
              </div>
            ))}
          </div>
          <div className={`${styles.menuItem} ${styles.detailButton}`}>
            <Button>Detail</Button>
          </div>
        </div>

        <div className={styles.summary}>
          <div className={styles.summaryItem} data-area="bottom">
            <StatsHighlight label="Today's profit" value={currentDailyProfit} />
          </div>
          <div className={styles.summaryItem} data-area="top">
            <StatsHighlight label="Equity" value={equity} />
          </div>
          <div className={styles.summaryItem} data-area="top">
            <StatsHighlight label="Unrealized PnL" value={unrealizedPnL} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
