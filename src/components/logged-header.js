import React from 'react';
import {FaChartLine} from 'react-icons/fa';

const LoggedHeader = (props) => {
	return(
		<header className="logged-in-header">
			<FaChartLine size={24} />
			<div className="header-info">
				<p>Nova cotação</p>
				<p>#0980</p>
			</div>
			<div className="user-img">
				<img src="https://picsum.photos/50/50" />
			</div>
		</header>
	);
}

export default LoggedHeader;