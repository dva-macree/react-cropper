import React,{Componet} from 'react';

class Cropper extends Componet {
	
	finishCropImage(){
		var thisObj  = this;
		var croppeCanvas = thisObj.cropper.getCroppedCanvas({
			width : 200,
			height : 200
		});
		var imgDataUrl = croppedCanvas.toDataURL();
		var where = '.o2_sign' + thisObj.img + 'img';
		document.querySelector(where).src = imgDataUrl;
		thisObj.flag.imgHasLoad = false;
	}

	render(){
		return (
			<div>
				<div class="o2_alert_mask" v-bind:class="{'show':imgHasLoad}" ></div>
				<div class="o2_alert" v-bind:class="{'show':imgHasLoad}" >
					<span class="o2_alert_close" v-on:click="imgHasLoad=false;"></span>
					<div class="cropper">
						<div class="cropper_box" id="cropperBox">
							<img src="http://fpoimg.com/200x200" style="width:100px;height:100px;" id="uploadPreview">
						</div>
						<div class="cropper_res_wrap">
							<div class="cropper_res" id="cropperRes">
								<img src="http://fpoimg.com/200x200" style="width:100px;height:100px;">
							</div>
						</div>
					</div>
					<div class="o2_btns cropper_btn">
						<a href="javascript:;" class="o2_btn bg1" onClick="this.finishCropImage()">完成</a>
					</div>
				</div>

			</div>
		)

	}

}