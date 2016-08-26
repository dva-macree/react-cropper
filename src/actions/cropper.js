import * as types from '../constants/ActionTypes';

export const toggleShowColorSetting = () => {
	return {type : types.TOGGLE_FLAG_SHOWCOLORSETTING};
};

export const toggleLoadSign = () => {
	return {type : types.TOGGLE_FLAG_LOADSIGN};	
} 

export const setBrowserUnsupport = param => ({type : types.SET_BROWSERUNSUPPORT},param);

export const setImgHasLoad =  param => ({type : types.SET_IMGHASLOAD},param); 

export const setCropper =  param => ({type : types.SET_CROPPER},param);  

export const setCropperHasInit = param => ({type : types.SET_CROPPERHASINIT},param); 

export const setImg = param => ({type : types.SET_IMG},param);