import React,{Component} from 'react';
import {toggleLoadSign} from '../actions/cropper'


export default class Cover extends Component {

	static propTypes: {
	 	dispatch : PropTypes.func.isRequired    
	}
	render(){
		const {dispatch} = this.props;
		return (
			
 			<div className="o2_cover">
                <div className="o2_cover_content">
                    <div className="title">
                        <h2></h2>
                        <small></small>
                    </div>
                    <a href="#" className="o2_cover_btn" onClick={() => dispatch(toggleLoadSign())}>点我</a>
                </div>
            </div>
		)

	}

}



