import PropTypes from 'prop-types';
import { Button } from '../../button';

const FormButton = ({ children, isLoading }) => (
  <Button
    className="form-button"
    htmlType="submit"
    isLoading={isLoading}
    type="primary"
    size="large"
    shape="round">
    {children || 'Connect Wallet'}
  </Button>
);

FormButton.propTypes = {};

export default FormButton;
