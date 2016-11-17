const React = require ('react');

class EyesOnMe extends React.Component{
  constructor(props) {
    super(props);
  }

  focus(){
    console.log('Good!')
  }

  blur(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <button onFocus={this.focus} onBlur={this.blur} />
      )
  }
}

module.exports = EyesOnMe;
