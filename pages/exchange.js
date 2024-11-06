import { Card } from '../components/data-display/card';
import ExchangeForm from '../modules/exchange/ExchangeForm';
import ExchangeActions from '../modules/exchange/ExchangeActions';
import { Title } from '../components/typography';

const exchange = () => (
  <div className="exchange">
    <Card
      title={<Title level={2}>Swap</Title>}
      extra={<ExchangeActions />}
      style={{ maxWidth: 500, width: '100%' }}>
      <ExchangeForm />
    </Card>

    <style jsx>
      {`
        .exchange {
          display: flex;
          justify-content: center;
        }
      `}
    </style>
  </div>
);

export default exchange;
