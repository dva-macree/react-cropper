import React,{Component} from 'react';

export default class Preview extends Component {
	render(){
		<div class="o2_box">
			<span class="o2_box_type">预览</span>
			<span class="o2_color_setting" title="配色设置" onClick="flag.showColorSetting = !flag.showColorSetting">配色</span>
			<div class="o2_sign" id="sign" :style="{ backgroundColor:style.co_bg }" >
				<div class="logo">
					<img alt="logo" onClick="flag.showColorSetting = !flag.showColorSetting">
				</div>
				<div class="img">
					<img alt="头像">
				</div>	
				
				<div class="info">
					<div class="title" style="{ color:style.co_title }">
						<p class="e_name" v-text="info.e_name? info.e_name : 'NAME'"></p>
						<p class="c_name" v-text="info.c_name ? info.c_name:'姓名'"></p>
					</div>
				</div>
			</div>
		</div>
	}
}