import React from 'react';
import {MdArrowForward} from 'react-icons/md'; 
import {FaChartLine} from 'react-icons/fa';
import StdButton from '../components/std-button';

export default class Login extends React.Component{

	constructor(props){
		
		super(props);
		this.login = this.login.bind(this);

	}

	login(){
		this.props.history.push('/cotacao');
	}

	render(){

		return (
			<div className="content-wrapper content-wrapper--login">
				<hgroup className="login-title-group">
					<FaChartLine size={32} />
					<h2>Cotação de Seguros</h2>
					<p>Solução inovadora da líder de mercado</p>
				</hgroup>
				<StdButton 
					style={{color:"#937ef0", backgroundColor: '#FFF'}}
					label="Iniciar" 
					icon={<MdArrowForward size={32} />} 
					onClick={this.login} />
		
			</div>			
		);
	}

}
