import React,{Component,PropTypes} from 'react';

export default class Main extends Component {
	
	static propTypes: {
	 	dispatch : PropTypes.func.isRequired    
	}
	render(){
		const {dispatch}  = this.props;
		return (
		    <div className="o2_main" className="{ flag.needLoadSign ? 'show': ''}" >
				<span className="o2_main_close" onClick={() => dispatch(toggleLoadSign())}></span>
		        <preview></preview>
				<content></content>
			</div>

			)
	}
}