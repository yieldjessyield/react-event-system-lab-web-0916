const React = require ('react');

class Keypad extends React.Component{
  constructor(props) {
    super(props);
      this.input = this.input.bind(this)
  }

  input(){
    console.log('Entering password...')
  }

  render(){
    return (
      <input type="password" onKeyUp={this.input} />
      )
  }
}

module.exports = Keypad;
