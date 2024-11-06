import { useEffect, useState } from 'react';
import { Form, Result } from 'antd';
import { Title } from '../../../components/typography';
import FormButton from '../../../components/data-entry/forms/FormButton';
import TokenSelect from '../../../components/data-entry/tokens/tokenSelect/TokenSelect';

const CreatePoolForm = () => {
  const [poolCreatedSuccess, setPoolCreatedSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onFinish = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPoolCreatedSuccess(true);
    }, 1000);
  };

  const onFinishFailed = () => {};

  useEffect(() => {
    fetch('/tokens-pricings.json');
  }, []);

  return (
    <div className="create-pool-form">
      <div className="create-pool-form-header">
        <Title level={1}>Create pool</Title>
      </div>
      {poolCreatedSuccess ? (
        <Result status="success" title="Pool created successfully" />
      ) : (
        <Form
          name="poolForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <div className="create-pool-form-content">
            <Form.Item
              name="tokenValueIn"
              rules={[{ required: true, message: 'Please select token' }]}>
              <TokenSelect />
            </Form.Item>
            <img src="/add-icon.svg" />
            <Form.Item
              name="tokenValueOut"
              rules={[{ required: true, message: 'Please select token' }]}>
              <TokenSelect />
            </Form.Item>
          </div>
          <div className="form-button-wrapper">
            <FormButton isLoading={isLoading}>Create Pool</FormButton>
          </div>
        </Form>
      )}
      <style jsx>{`
        .create-pool-form {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-flow: column nowrap;
        }
        .create-pool-form-header {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .create-pool-form-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          grid-template-rows: 1fr;
          justify-items: center;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
        }
        .form-button-wrapper {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default CreatePoolForm;
