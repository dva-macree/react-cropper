import * as types from 'constants/ActionTypes';

exports const toggleShowColorSetting = ({type : types.TOGGLE_FLAG_SHOWCOLORSETTING})

exports const toggleLoadSign = ({type : types.TOGGLE_FLAG_LOADSIGN})

exports const setBrowserUnsupport = param => ({type : types.SET_BROWSERUNSUPPORT},param);

exports const setImgHasLoad =  param => ({type : types.SET_IMGHASLOAD},param); 

exports const setCropper =  param => ({type : types.SET_CROPPER},param);  

exports const setCropperHasInit = param => ({type : types.SET_CROPPERHASINIT},param); 

exports const setImg = param => ({type : types.SET_IMG},param);