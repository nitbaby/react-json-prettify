import React, { Component } from 'react';
import './JsonFormatterBox.css'
class JsonFormatterBox extends Component {
    constructor(props) {
        super(props);
        const sampleJsonString = `{"data":[{"name":"isAuthenticated","value":"false"}]}`
        this.state = {
            jsonString: sampleJsonString,
            outputJson: this.prettifyJson(sampleJsonString)
        };
        console.log('JsonFormatterBox-component instantiated..');
        //this.handleBtnClick = this.handleBtnClick.bind(this);
    }
    handleBtnClick(e) {
      // console.log('label', Number(this.props.label));
      //   this.setState({
      //       count: this.state.count + Number(this.props.label)
      //   });
      //   let onHit = this.props.onHit;
      //   onHit(e, Number(this.props.label)); // Emitting event
    }
    prettifyJson(input){
      return JSON.stringify(JSON.parse(input), null, 2);
    }
    hanldeJsonValueChange(e) {
      console.log('json string new value', e.target.value);
      const convertedValue = this.prettifyJson(e.target.value);
      console.log('convertedValue', convertedValue);
      this.setState({
          jsonString: e.target.value,
          outputJson: convertedValue
      });
      // let onHit = this.props.onHit;
      // onHit(e, Number(this.props.label)); // Emitting event
    }
    render() {
        console.log('HitButton-component rendered..');
        // let { label } = this.props;
        let { jsonString, outputJson } = this.state;        
        return (
            <div className="well">
                <textarea className={'json-input-box'} value={jsonString} onChange={(e)=> {this.hanldeJsonValueChange(e) }}/>
              
                <div>
                </div>
                
                <pre>
                  {outputJson}
                </pre>
            </div>
        );
    }
}

export default JsonFormatterBox;
