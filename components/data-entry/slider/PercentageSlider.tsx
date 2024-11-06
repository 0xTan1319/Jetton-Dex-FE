import { Slider } from 'antd';

const marks = {
  0: '0%',
  25: '25%',
  50: '50%',
  75: '75%',
  100: '100%'
};

type PercentageSliderProps = {
  onChange: any;
};

const PercentageSlider = ({ onChange }: PercentageSliderProps) => (
  <Slider onChange={onChange} dots step={25} marks={marks} />
);

export default PercentageSlider;
