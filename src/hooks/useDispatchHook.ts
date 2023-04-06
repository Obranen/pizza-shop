import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import RootActions from '../store/actions/root'

export const useDispatchHook = () => {
  const dispatch = useDispatch()
  return bindActionCreators(RootActions, dispatch)
}