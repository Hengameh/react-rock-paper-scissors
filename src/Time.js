import React, {Component} from 'react';

class Time extends Component {
  constructor(props) {
    super(props)
    this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount()
  {
setInterval(()=>this.currentTime(),1000)
  }

  render() {

    return (
      <p>
        {this.state.time.toLocaleTimeString()}
      </p>
    )
  }

}

  export default Time;
