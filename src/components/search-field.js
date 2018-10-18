import React from 'react';
import MaskedInput from 'react-text-mask';
import {FaCircleNotch, FaTimesCircle, FaCheckCircle} from 'react-icons/fa';

const SearchField = (props) => {
	
	return(
		<div className={'search-input '+props.status}>
			<MaskedInput
				{...props}
				mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/]}
				type="text"
			 	placeholder="__.___.___/____-__"
			 	onChange={props.onChange || {}} 
			 	/>
			 	{ props.status == 'loading' ? <FaCircleNotch /> : null}
			 	{ props.status == 'invalid' ? <FaTimesCircle /> : null}
			 	{ props.status == 'valid'   ? <FaCheckCircle /> : null}
		 </div>
	)
}

export default SearchField;