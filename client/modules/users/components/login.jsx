import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {username, password} = this.refs;
    const u = ReactDOM.findDOMNode(username).value;
    const p = ReactDOM.findDOMNode(password).value;
    console.log(u,p);
  }

  render() {
    return (
      <Col xs={12} sm={6}>
        <Panel>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormControl type="text" placeholder="Username or Email" ref="username"/>
            <FormControl type="password" placeholder="Password" ref="password"/>
            <Button type="submit">Login</Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default Login;
