import { Card } from '../components/data-display/card';
import { Title } from '../components/typography';
import LiquidityActions from '../modules/liquidity/LiquidityActions';
import LiquidityForm from '../modules/liquidity/LiquidityForm';

const liquidity = () => (
  <div className="liquidity">
    <Card
      title={<Title level={2}>Liquidity</Title>}
      extra={<LiquidityActions />}
      style={{ maxWidth: 500, width: '100%' }}>
      <LiquidityForm />
    </Card>
    <style jsx>
      {`
        .liquidity {
          display: flex;
          justify-content: center;
          width: 100%;
        }
      `}
    </style>
  </div>
);

export default liquidity;
