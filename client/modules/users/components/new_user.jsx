import React from 'react';
import ReactDOM from 'react-dom';
import {Col,Panel,FormControl,Button} from 'react-bootstrap';

class NewUser extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const {create} = this.props;
    const {username,email,password} = this.refs;
    const u = ReactDOM.findDOMNode(username).value;
    const e = ReactDOM.findDOMNode(email).value;
    const p = ReactDOM.findDOMNode(password).value;
    create(u,e,p);
  }

  render() {
    const {usernameError,emailError,passwordError} = this.props;
    return (
      <Col xs={12} sm={6} smOffset={3}>
        <Panel>
          <h1>Register</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>

            <p className="msg-error">{usernameError ? usernameError : ''}</p>
            <FormControl type="text" placeholder="Username" ref="username"/>
            <div className="clearfix">&nbsp;</div>

            <p className="msg-error">{usernameError ? emailError : ''}</p>
            <FormControl type="email" placeholder="Email" ref="email"/>
            <div className="clearfix">&nbsp;</div>

            <p className="msg-error">{usernameError ? passwordError : ''}</p>
            <FormControl type="password" placeholder="Password" ref="password"/>
            <div className="clearfix">&nbsp;</div>

            <Button bsStyle="primary" type="submit">Sign up</Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default NewUser;
