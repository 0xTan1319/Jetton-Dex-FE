import {
  useSelector as useSelectorRedux,
  TypedUseSelectorHook,
  useDispatch as useDispatchRedux,
  shallowEqual
} from 'react-redux';
import type { RootState, AppDispatch } from '../../redux/reduxTypes';

const useSelector = (selector = () => {}, extraData?) =>
  useSelectorRedux(state => selector(state, extraData), shallowEqual);

const useDispatch = () => useDispatchRedux<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useSelector, useDispatch, useAppSelector };
