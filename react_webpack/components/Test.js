import React from 'react'
import '../css/style.css'
import logo from '../img/logo.jpg'

class Test extends React.Component {
  constructor(...args) {
    super(...args);
    this.state={value: ''};
  }
  fn() {
    this.setState({
      value: this.refs['txt1'].value
    });
  }
  render() {
    return <div>
      <input ref="txt1" type="text" onChange={this.fn.bind(this)} />
      <span>{this.state.value}</span><br />
      <img src={logo} />
    </div>;
  }
}

module.exports = Test;
