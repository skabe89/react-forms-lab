import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  charactersLeft = () => {
    return this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={ this.handleChange } value={this.state.message}/>
        <p>{ 280 - this.state.message.length }</p>
      </div>
    );
  }
}

export default TwitterMessage;
