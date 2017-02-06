import React from 'react'
import Header from '../../components/Header'
//import Sidebar from 'react-sidebar';
var Menu = require('react-burger-menu').slide;
import FacebookLogin from 'react-facebook-login';
const responseFacebook = (response) => {
  console.log(response);
}


import './CoreLayout.scss'
import '../../styles/core.scss'

export default React.createClass({
  getInitialState(){
    return {isLogged: true};
  },
  showSettings: function (event) {
    event.preventDefault();

  },
  render: function () {

    let btn = this.state.isLogged ? <Menu customBurgerIcon={ <img src="plus.svg" /> }
    >
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
    </Menu> : <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      callback={responseFacebook}
      icon="fa-facebook"
      textButton=""
    />


    return (
      <div>
        {btn}
        <div className='container text-center'>

          <div className='core-layout__viewport'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

/*

 export const CoreLayout = ({ children }) => (
 <Sidebar sidebar={sidebarContent}>
 <div className='container text-center'>
 <Header />
 <div className='core-layout__viewport'>
 {children}
 </div>
 </div>
 </Sidebar>
 );

 CoreLayout.propTypes = {
 children: React.PropTypes.element.isRequired
 };
 */

//export default CoreLayout
