import './App.css';

import { Badge } from './ui/primitives/badge/badge.tsx';
import { Badges } from './ui/primitives/badges/badges.tsx';
import { Card } from './ui/components/card/card.tsx';
import { CardHeader } from './ui/components/card/cardHeader.tsx';
import { CardBody } from './ui/components/card/cardBody.tsx';

function App() {
  return (
    <>
      <Card>
        <CardHeader>
          <Badges>
            <Badge>Ongoing</Badge>
            <Badge outline>FTMO Challenge</Badge>
          </Badges>
          {/* replace inline style once moved to standalone account component */}
          <div style={{ marginTop: '8px' }}>
            <span className="lg body">Login: </span>
            <span className="lg heading">TBD 2090067192</span>
          </div>
        </CardHeader>
        <CardBody>body TBD</CardBody>
      </Card>
    </>
  );
}

export default App;
