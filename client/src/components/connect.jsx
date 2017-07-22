import React from 'react';
//5394 //4B9F
class Connect extends React.Component {

  constructor(props) {
    super(props);
    this.name = localStorage.getItem('name') || '',
    this.serial = localStorage.getItem('serial') || ''
  }

  render() {
    return (
      <div>
        <h1 className='welcome-message'> Welcome Back! </h1>
        <button onClick={() => this.props.handleConnect('paul', '3D62')}>Paul</button>
        <button onClick={() => this.props.handleConnect('james', '5394')}>James</button>
        <h3 className='instructions'> Enter a nickname and your headset number to start a game</h3>
        <input className='nickname'
               id="nickname"
               placeholder="James"
               defaultValue={this.name}
        />
        <input className='serial'
               id="serial"
               placeholder="3D62 or 5394"
               defaultValue={this.serial}
        />
        <button onClick={this.props.handleConnect}>Connect</button>
        {/*<button onClick={this.props.handleConnect}>Paul</button>*/}
      </div>
    );
  }
}

export default Connect;
