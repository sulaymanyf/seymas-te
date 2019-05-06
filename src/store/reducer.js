import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/Layout/Header/store/';
import { reducer as musicReducer } from '../components/Layout/Music/store/';



const reducer = combineReducers({
	header: headerReducer,
	music: musicReducer,
	// home: homeReducer,
	// detail: detailReducer,
	// login: loginReducer
});

export default reducer;
