import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const changePage = (page) => ({
	type: constants.CHANGE_PAGE,
	page
});

export const getList = () => {
	return (dispatch) => {
		axios.get('/music/getList').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};
