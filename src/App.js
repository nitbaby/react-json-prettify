import React, { Component } from 'react';
import JsonFormatterBox from './components/JsonFormatterBox'
class App extends Component {

  constructor(props) {
    super(props);
    console.log('App-component instantiated.');
  }

  render() {
    console.log('App-component rendered.');
    let { title } = this.props;  // destructuring
    return (
      <div className="container">
        <div className="page-header">{title}</div>
        <div className="panel panel-default">
          <div className="panel-heading"> Input Your JSON Data here</div>
          <div className="panel-body">
            <JsonFormatterBox/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
