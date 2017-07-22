import React from 'react';
import Gameboard from './gameboard.jsx';

class SetHeadset extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerA: null,
			playerB: null
		};
	}

	handleClick(val) {
		this.props.setPlayer(val);
	}

	render() {
		return (
			<div>
				<h1 className="select-headband">Select Headband For Player A</h1>
				<button onClick={ () => this.handleClick('3D62') } >3D62</button>
				<button onClick={ () => this.handleClick('4B9F') } >4B9F</button>
			</div>
		);
	}
}

export default SetHeadset;