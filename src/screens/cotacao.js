import React from 'react';
import StdButton from '../components/std-button';
import SearchField from '../components/search-field';
import LoggedHeader from '../components/logged-header';
import {validaCNPJ, asyncQueryAPI} from '../utils/utils';

import {MdArrowForward, MdShowChart} from 'react-icons/md'; 
import {FaChartLine} from 'react-icons/fa';

export default class Cotacao extends React.Component{

	constructor(props){
		
		super(props);
		this.handleCNPJChange = this.handleCNPJChange.bind(this);

		this.state = {
			cnpjInputStatus: ''
		};

	}


	handleCNPJChange(event){

		const value = event.target.value.replace(/[^0-9/]/g, '');

		//API expects slash (/), so length 15
		if(value.length != 15){

			this.setState({
				cnpjInputStatus: ''
			});

			 return;
		} 

		if(!validaCNPJ(value)){

			this.setState({
				cnpjInputStatus: 'invalid'
			});

			return;

		}

		//Proceed

		this.setState({
			cnpjInputStatus: 'loading'
		});

		asyncQueryAPI(value, (result) => {
			console.log(result);
			if(result == 200){
				this.setState({
					cnpjInputStatus: 'valid'
				});
			}else{
				this.setState({
					cnpjInputStatus: 'invalid'
				});
			}
		});



	}

	render(){
		return (
			<div className="content-wrapper content-wrapper--cotacao">
				<LoggedHeader />
				<div className="search-wrapper">
					<div className="content">
						<h3><span className="step-number">1</span> Buscar por CNPJ ou empresa</h3>
						<SearchField onChange={this.handleCNPJChange} status={this.state.cnpjInputStatus} />
						<StdButton 
							style={{color:"#fff", backgroundColor: '#32cccc', marginTop: '15px'}}
							label="Ok" 
							icon={<MdArrowForward size={32} />} 
							onClick={this.login}
							disabled={this.state.cnpjInputStatus == 'valid' ? false : true} 
							/>
					</div>
				</div>
			</div>			
		);
	}
}
