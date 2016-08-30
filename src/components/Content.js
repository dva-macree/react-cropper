import React,{Component} from 'react';
import { connect } from 'react-redux' // 引入connect 
import cn from 'classnames';
import Cropper from '../vendors/cropper.min.js'
import domtoimage from '../vendors/dom-to-image.min.js'
import saveAs from '../vendors/FileSaver.min.js'
import {toggleShowColorSetting,setImgHasLoad,setCropper,setCropperHasInit,setImg} from '../actions/cropper'

class Content extends Component {
	static propTypes: {
	 	dispatch : PropTypes.func.isRequired    
	}
	isImage (type){
		var filter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
		return !!(filter.test(type));

	}

	bindLoadImgEvent(){
		var thisObj = this;
        if(!this.helper.support)
            return ;
        var uploadPreview = document.getElementById('uploadPreview');
        var uploadImages = document.querySelectorAll('.J_uploadImage');
        var reader = new FileReader();
        var URL = window.URL || window.webkitURL;
        var blobURL;
        var len = uploadImages.length;
        for(var i = 0; i < len ; i++){
            uploadImages[i].addEventListener('change',function(){
                var files = this.files;//TODO
                if(files.length == 0) return ;
                var file = files[0];
                if(!thisObj.isImage(file.type)){
                    alert ('you have to select an image file') ;
                    return ;
                }
                reader.readAsDataURL(file);
                blobURL = URL.createObjectURL(file);
                if(thisObj.cropper){
                    thisObj.cropper.reset();   
                }
                thisObj.setImgHasLoad(true);
                thisObj.setImg(this.dataset.dest);
            })   
        }
        
        reader.onload = function(e) {
            uploadPreview.src = e.target.result;
            if (!thisObj.flag.cropperHasInit) {
                thisObj.loadCropper();
                return;
            }
            thisObj.cropper.replace(blobURL);
        }
	}

	loadCropper(){
		var thisObj = this;
            var image = document.querySelector('#cropperBox > img');
            var preview = document.getElementById('cropperRes');
            var previewImage = preview.getElementsByTagName('img').item(0);
            var option = {
                aspectRatio : 1/1,
                build : function(){
                    previewImage.src = image.src;   
                },
                crop : function(data){
                    var cropper = this.cropper;
                    var imageData = cropper.getImageData();
                    var previewAspectRatio = data.width / data.height;
                    
                    var previewWidth = preview.offsetWidth;
                    var previewHeight = previewWidth / previewAspectRatio;
                    var imageScaledRatio = data.width / previewWidth;
                    
                    preview.style.height = previewHeight + 'px';
                    previewImage.style.width = imageData.naturalWidth / imageScaledRatio + 'px';
                    previewImage.style.height = imageData.naturalHeight / imageScaledRatio + 'px';
                    previewImage.style.marginLeft = -data.x / imageScaledRatio + 'px';
                    previewImage.style.marginTop = -data.y / imageScaledRatio + 'px';
                }
            };
//            thisObj.cropper = new Cropper(image,option);
            this.setCropper(new Cropper(image,option));
//            thisObj.flag.cropperHasInit = true;
            this.setCropperHasInit(true);
	}

	resetColors(){
		var thisObj = this;
        var croppedCanvas = thisObj.cropper.getCroppedCanvas({
            width: 200,
            height: 200
        });
        var imgDataUrl = croppedCanvas.toDataURL();
        var where = '.o2_sign .' + thisObj.img + ' img';
        document.querySelector(where).src = imgDataUrl;
        thisObj.setImgHasLoad(false);
	}

	finishCropImage(){
		var thisObj = this;
        var croppedCanvas = thisObj.cropper.getCroppedCanvas({
            width: 200,
            height: 200
        });
        var imgDataUrl = croppedCanvas.toDataURL();
        var where = '.o2_sign .' + thisObj.img + ' img';
        document.querySelector(where).src = imgDataUrl;
        thisObj.setImgHasLoad(false);
	}

	downloadRes(){
        var thisObj = this;
	    var sign = document.getElementById('sign');
	    var imgName = this.props.cropper.info.e_name; 
	    domtoimage.toBlob(sign).then(function(blob){ 
	        saveAs.saveAs(blob,imgName + '.png');
	    });
	}

	render(){
		const {dispatch,toggleShowColorSetting,setImgHasLoad,setCropper,setCropperHasInit,setImg} = this.props;
		const showColorSettingClass = cn('o2_content_slider',{
			slide : this.props.cropper.flag.showColorSetting
		})

		const alertMaskClassName = cn('o2_alert_mask',{
			show : this.props.cropper.flag.imgHasLoad
		})

		const alertClassName = cn('o2_alert',{
			show : this.props.cropper.flag.imgHasLoad
		})

		return (
		<div>
			<div className="o2_content" >
				<div className={showColorSettingClass}>
					<div className="o2_form">
						<div className="o2_form_row o2_input_required">
							<label  className="o2_label">头像</label>
							<div className="o2_input_file">
								<span className="o2_input_name">上传图片</span>
								<input type="file" className="J_uploadImage" data-dest="img"></input>
							</div>
						</div>
						<div className="o2_form_row">
							<label  className="o2_label">中文名</label>
							<input type="text" className="o2_input_text"  name="c_name" placeholder="中文名"></input>
						</div>
						<div className="o2_btns btn_download">
							<a href="javascript:;" className="o2_btn bg1 " onClick={() => (downloadRes())}>生成头像</a>	
						</div>
					</div>
					<div className="o2_form">
						<div className="o2_form_row">
							<label  className="o2_label">背景图片</label>
							<div className="o2_input_file">
								<span className="o2_input_name">上传图片</span>
								<input type="file" className="J_uploadImage" data-dest="logo"></input>
							</div>
						</div>
						<div className="o2_form_row">
							<label  className="o2_label">面板底色</label>
							<div className="o2_input_color">
								<input type="color"></input>
								<input type="text" className="o2_input_text"></input>
							</div>
						</div>
						<div className="o2_btns">
							<a href="javascript:;" className="o2_btn bg2" onClick={() => (resetColors())}>重置</a>
							<a href="javascript:;" className="o2_btn bg1" onClick={() => (toggleShowColorSetting())}>保存并返回</a>
						</div>
					</div>
				</div>
			</div>
			<div className={alertMaskClassName} ></div>
			<div className={alertClassName} >
				<span className="o2_alert_close" onClick={() => (setImgHasLoad(false))}></span>
				<div className="cropper">
					<div className="cropper_box" id="cropperBox">
						<img src="http://fpoimg.com/200x200" style={{width:'100px',height:'100px'}} id="uploadPreview"/>
					</div>
					<div className="cropper_res_wrap">
						<div className="cropper_res" id="cropperRes">
							<img src="http://fpoimg.com/200x200" style={{width:'100px',height:'100px'}}/>
						</div>
					</div>
				</div>
				<div className="o2_btns cropper_btn">
					<a href="javascript:;" className="o2_btn bg1" onClick={() => (finishCropImage())}>完成</a>
				</div>
			</div>
		</div>

			)

	}
}

const getCropper = state => {
	return {
		cropper : state.cropper
	}
}

export default connect(getCropper,{toggleShowColorSetting,setImgHasLoad,setCropper,setCropperHasInit,setImg} )(Content)