import { combineReducers } from 'redux';
import rdLogin from '../container/SplashScreen/reducer/rdLogin';
import Navigation from '../router/rdNav';

const rootReducer = combineReducers({
    rdLogin,
    nav: Navigation
});

export default rootReducer;
