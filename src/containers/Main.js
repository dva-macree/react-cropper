import React,{Component,PropTypes} from 'react';
import cn from 'classnames';
import { connect } from 'react-redux' // 引入connect 
import Preview from './Preview'
import Content from './Content'
import {toggleLoadSign} from '../actions/cropper'
class Main extends Component {
	

	showMessage(){
		alert('first click');
	}

	render(){
		const {dispatch,toggleLoadSign}  = this.props;
		 const className = cn('o2_main', {
              show: this.props.needLoadSign
          });
		return (
		    <div className={className}>
				<span className="o2_main_close" onClick={() => (toggleLoadSign())}></span>
		        <Preview></Preview>
				<Content></Content>
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


export default connect(getNeedLoadSign,{toggleLoadSign} )(Main)