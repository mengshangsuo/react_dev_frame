
import React, { Component } from 'react';

class Test extends Component<any> {
  constructor(props: string) {
    super(props);
    // this.state = { test: 'dsjfhsj' }
    this.name = this.name.bind(this);
  }

  fn = () => { console.log('this', this) }

  name() {
    console.log('name--', this);
  }

  render() {
    return (
      <div>
        {/* {this.state?.test} */}
        <button onClick={this.fn}>fn</button>
        <button onClick={this.name}>name</button>
      </div>
    );
  }
}

export default Test


