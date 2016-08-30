import React,{Component} from 'react';
import {toggleLoadSign} from '../actions/cropper'
import { connect } from 'react-redux' // 引入connect 

class Cover extends Component {

	render(){
		const {dispatch,toggleLoadSign} = this.props;
		return (
			
 			<div className="o2_cover">
                <div className="o2_cover_content">
                    <div className="title">
                        <h2></h2>
                        <small></small>
                    </div>
                    <a href="#" className="o2_cover_btn" onClick={() => (toggleLoadSign())}>点我</a>
                </div>
            </div>
		)

	}

}

const getNeedLoadSign = state => {
    console.log(state)
    return {
        needLoadSign : state.cropper.flag.needLoadSign
    }
}

export default connect(getNeedLoadSign,{toggleLoadSign})(Cover)