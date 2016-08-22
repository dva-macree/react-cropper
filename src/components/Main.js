import React,{Componet} from 'react';

class Main extends Componet {
	

	render(){
		return (
		    <div class="o2_main" v-bind:class="{'show':flag.needLoadSign}" >
				<span class="o2_main_close" v-on:click="toggleLoadSign()"></span>
		        <preview></preview>
				<content></content>
			</div>

			)
	}
}