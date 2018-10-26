import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Calc extends Component {
    render() {
        let result = 0;
        switch(this.props.oper) {
            case "+" :
                result = parseFloat(this.props.x) + parseFloat(this.props.y);
                break;
            case "*" : 
                result = parseFloat(this.props.x) * parseFloat(this.props.y);
                break;
            default :
                result = 0;
        }

        return (
            <div>
                <h3>연산 방식 : { this.props.oper }</h3>
                <hr />
                <div>
                    {this.props.x} {this.props.oper} {this.props.y}
                        = {result}
                 </div>
            </div>
        );
    }
}

Calc.propTypes = {
  x : PropTypes.number.isRequired,
  y : PropTypes.number.isRequired,
  oper : function(props, name, comName) {
    if (props[name] !== "+" && props[name] !== "*") {
      throw new Error(`${name} 속성은 +,* 만 허용합니다.(at${comName})`);
    }
  }
}

Calc.defaultProps = {
  x : 10,
  y : 20,
  oper : "+"
}


export default Calc;