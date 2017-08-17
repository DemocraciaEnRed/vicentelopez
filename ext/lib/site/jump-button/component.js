import React,{Component} from 'react'
import jump from 'jump.js'
import {Link} from 'react-router'

export default class Jump extends Component {
	constructor(props) {
		super(props) 
		this.state={visibility:false}
		this.limit=400
	}
	componentWillMount(){
		window.addEventListener('scroll', this.checkScroll) 
		
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.checkScroll) 
	}
	checkScroll = (event) => {
		if (window.matchMedia("(max-width: 500px)").matches) {
			this.limit = 200
		} else {
			this.limit = 370
		}	
		if (event.pageY>this.limit){
			this.setState({visibility:true})
		}else{
			this.setState({visibility:false})
		}
		
	}
	render () {
		return (
			<div className='jump-container'>
				{ this.state.visibility && (
					<button className='boton-azul' onClick={this.props.goTop}>
						Up
					</button>
				)}
			</div>
		)
	}
}


