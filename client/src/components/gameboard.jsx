import React from 'react';
import * as d3 from 'd3';
import io from 'socket.io-client';
import _ from 'underscore';

class Gameboard extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
				hasWinner: false,
				cx : '570',
				cy : '225',
				radius: '40',
				playerA: this.props.playerA,
				playerB: this.props.playerB
			};
			this.changeBallSize = this.changeBallSize.bind(this);
			this.moveTheBall = this.moveTheBall.bind(this);
			this.getMellowData = this.getMellowData.bind(this);
			this.checkWinner = this.checkWinner.bind(this);
		}
		
		componentDidMount() {
			this.props.socket.on('score', function(val) {
				if (this.state.cx < 1000 && this.state.cx > 140) {
					this.moveTheBall(val);
				} else {
					if (this.state.cx >= 1000){
						this.setState({winner: 'playerA'});
					} else if (this.state.cx <= 140) {
						this.setState({winner: 'playerB'});
					}
				}
			}.bind(this));
		}

		getMellowData(data, callback) {
			if (data['data'][0] === '/muse/elements/experimental/mellow') {
				var val = data['data'][1] * 100;
				callback(val);
			}
		}

		moveTheBall(val) {
				var cx = Number(this.state.cx);
					this.setState({cx: cx + val} , () => { console.log('this is the state data', this.state.cx);});
					d3.select('.ball').transition().duration(100).attr('cx', this.state.cx);
		}
				
		changeBallSize(val) {
			var r = this.state.radius;
			if (val > 50) {
				this.setState({radius: r + 5});
			} else {
				this.setState({radius: r - 5});
			}
		}

		render() {
			if (this.state.cx < 1000 && this.state.cx > 140) {
				return (
					<div>
						<svg width="1140" height="450">
						<circle className ="ball" cx={570} cy={this.state.cy} r={this.state.radius} stroke="green" strokeWidth="4" fill="yellow" />
							<line x1="100" y1="25" x2="100" y2="425" style={{stroke:"rgb(255,0,0)"}} />
							<line x1="1040" y1="25" x2="1040" y2="425" style={{stroke:"rgb(255,0,0)"}} />
						</svg>
							<h1 className="player-a">Player A : {this.state.playerA}</h1>
							<h1 className="player-b">Player B : {this.state.playerB}</h1>
					</div>
				);
			} else {
				return (
					<div>
						<h1>{this.state.winner}</h1>
					</div>
				)
			}
		}
};


export default Gameboard;