import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      // count: 0,
      value: ""
    };
=======
<<<<<<< HEAD
      count: 0,
      value: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
=======
      inputValue: null
    };
  }
  
  changeHandler = () => {
    this.setState = ({
      
    })
>>>>>>> 9f47f91361da3c17ca891569d5fa673bcf4dc166
>>>>>>> 1b6684c8dde45a9b28801a48622d6d7fe388d08d
  }

  changeHandler = event => {
    console.log(event);
    this.setState({
      value: event.target.value
    });
  };

  render() {
    const updateCounter = () => {
      return this.props.maxChars - this.state.value.length;
    };

    return (
      <div>
        <strong>Your message:</strong>
<<<<<<< HEAD
        <p>{updateCounter()} characters left.</p>
=======
<<<<<<< HEAD
        <p>{this.updateCounter()} characters left.</p>
>>>>>>> 1b6684c8dde45a9b28801a48622d6d7fe388d08d
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.value}
          onChange={this.changeHandler}
        />
=======
        <input type="text" name="message" id="message" value={this.state.inputValue}/>
>>>>>>> 9f47f91361da3c17ca891569d5fa673bcf4dc166
      </div>
    );
  }
}

export default TwitterMessage;