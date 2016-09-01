import * as types from '../constants/ActionTypes';
import 'whatwg-fetch' //可以引入fetch来进行Ajax
export const toggleShowColorSetting = () => {
	return {type : types.TOGGLE_FLAG_SHOWCOLORSETTING};
};

export const toggleLoadSign = () => {
	return {type : types.TOGGLE_FLAG_LOADSIGN};	
} 

export const setBrowserUnsupport = param => ({type : types.SET_BROWSERUNSUPPORT,param});

export const setImgHasLoad =  param => ({type : types.SET_IMGHASLOAD,param}); 

export const setCropper =  param => ({type : types.SET_CROPPER,param});  

export const setCropperHasInit = param => ({type : types.SET_CROPPERHASINIT,param}); 

export const setImg = param => ({type : types.SET_IMG,param});

export const setUsername = param => ({type : types.SET_USERNAME,param});

export const setColor = param => ({type : types.SET_COLOR,param})

export const getSuccess = (json) => {
	return {
		type: types.GET_SUCCESS,
		json
	}
}
function fetchPosts(){
	return dispacth => {
		return fetch('./data.json')
			.then((res) => {console.log(res.status); return res.json()})
			.then((data) => {
				dispacth(getSuccess(data))
			})
			.catch((e) => {console.log(e.message)})
	}
}

export function fetchPostsIfNeeded(){
	return (dispacth,getState) => {
		return dispacth(fetchPosts())
	}
}