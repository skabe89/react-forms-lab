import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  login = (e) => {
    e.preventDefault();
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={ this.login } >
        <div>
          <label>
            Username
            <input onChange={ this.handleChange }id="username" name="username" type="text" value={ this.state.username }/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={ this.handleChange } id="password" name="password" type="password" value={ this.state.password }/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
