import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootReducer} from '../store/reducers/root';

export const useSelectorHook: TypedUseSelectorHook<RootReducer> = useSelector