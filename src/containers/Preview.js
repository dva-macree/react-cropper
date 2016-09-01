import React,{Component} from 'react';
import { connect } from 'react-redux' // 引入connect 
import {toggleShowColorSetting} from '../actions/cropper'
class Preview extends Component {
	render(){
		const {toggleShowColorSetting} = this.props;
		const c_name = this.props.state.info.c_name;
		return (
			<div className="o2_box">
			<span className="o2_box_type">预览</span>
			<span className="o2_color_setting" title="配色设置" onClick={() => (toggleShowColorSetting())}>配色</span>

			<div className="o2_sign" id="sign" style={ {backgroundColor:this.props.state.style.co_bg } }>
				<div className="logo">
					<img alt="logo" onClick={() => (toggleShowColorSetting())}/>
				</div>
				<div className="img">
					<img alt="头像"/>
				</div>	
				
				<div className="info">
					<div className="title" style={{ color:this.props.state.style.co_title }}>
						<p className="e_name"></p>
						<p className="c_name">{c_name}</p>
					</div>
				</div>
			</div>
		</div>

			)
		
	}
}

const getState = state => {
	return {
		state : state.cropper
	}
}

export default connect(getState,{toggleShowColorSetting})(Preview)