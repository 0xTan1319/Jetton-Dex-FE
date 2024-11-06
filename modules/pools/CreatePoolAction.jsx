import { Modal } from 'antd';
import { useState } from 'react';
import { Button } from '../../components/button';
import CreatePoolForm from './CreatePoolForm';

const CreatePoolAction = () => {
  const [isVisible, setIsVisible] = useState(false);
  const createPool = () => {
    setIsVisible(true);
  };
  const cancelPool = () => {
    setIsVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={createPool}>
        Create pool
      </Button>
      <Modal
        visible={isVisible}
        onCancel={cancelPool}
        footer={false}
        destroyOnClose>
        <CreatePoolForm />
      </Modal>
    </>
  );
};

CreatePoolAction.propTypes = {};

export default CreatePoolAction;
