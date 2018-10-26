import React, { Component } from 'react';
import style from 'styled-components';

class Footer extends Component {
  render() {
    const FooterBox = style.div`
      position:absolute;
      right:0; bottom:0; left:0;
      padding:1rem; 
      background-color: ${
        (props)=> {
          if (props.theme === "basic") return "skyblue";
          else return "#cdcdcd";
        }
      };
      text-align:center;
    `;
    return (
      <FooterBox theme="aaa">React StyledComponent Test@!!</FooterBox>
    )
  }
}

export default Footer;