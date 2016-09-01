import React,{Component} from 'react';
import {toggleLoadSign,fetchPostsIfNeeded} from '../actions/cropper'
import { connect } from 'react-redux' // 引入connect 
import List from '../components/List'  // 引入展示组件List
class Cover extends Component {

	render(){
		const {lists,dispatch,toggleLoadSign,fetchPostsIfNeeded} = this.props;
		return (
			
 			<div className="o2_cover">
                <div className="o2_cover_content">
                    <div className="title">
                    {lists.map((e, index) => 
                         <List text={e.title} key={index}></List>
                        // <div className="well well-sm" key={index}><a href={e.url} target="_blank">{e.title}</a></div>
                        )}

                    <button type="button" className="btn btn-default" onClick={() => (fetchPostsIfNeeded())}>加载数据</button>
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
        needLoadSign : state.cropper.flag.needLoadSign,
        lists : state.cropper.info.lists
    }
}

export default connect(getNeedLoadSign,{toggleLoadSign,fetchPostsIfNeeded})(Cover)