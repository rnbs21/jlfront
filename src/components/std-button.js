import React from 'react';

const StdButton = (props) => {
	return(
		<button 
			{...props}
			className="std-btn" 
			onClick={props.onClick}
			style={props.style}>
			{props.label}
			{props.icon ? props.icon : null} 
		</button>
	);

	
}

export default StdButton;