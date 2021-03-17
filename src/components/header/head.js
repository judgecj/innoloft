import React, { Component } from 'react';
import './header.css';

class  Header extends Component {

    constructor(props){
        super(props)
        this.state={
          showbuton:false,
           search:[],
          //  domain: 'http://localhost:4000/api', 
           hideSearch:true,
           collapse:false
        }
      }
  
  
      setCollapse = () => {
         this.setState({
          collapse:true
         })
         this.props.collapse(false)
      }
    
      
 render(){
    return (
        <div>
          <div className="Header">
            <div className="Header__inner">
              <div className="d-flex justify-between align-center w-100">
                <div className="">
                  <a href="https://innoloft.com/public" className="LogoLink__link">
                    <img width="100"
                      className="LogoDesktop LogoDesktop--header"
                      src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
                      alt="logo"
                    />
                  </a>
                  <div class="nav_icon">
                    <i class="fa fa-bars"  onClick={() => {this.setCollapse()}} aria-hidden="true"></i>
                    </div>
    
                </div>
    
                <div className="">
                    <span onClick={() => {this.setCollapse()}} className="d-lg-none text-white ham">
                                    <img width="30" src="/hamburger.svg" alt="" className=""/>
                    </span>
                </div>
              </div>
    
            </div>
          </div>
    
        </div>
      )
 }

}
export default Header
