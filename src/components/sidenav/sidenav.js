import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './sidenav.css';
import { Link } from 'react-router-dom';

class SideNav extends Component {

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
       this.props.collapseData(true)
    }
    


    render(){
      return (
        <div className="">
          
          <aside
            className={this.props.collapse ? 'sidebar  h-100' : 'sidebar active'}
          >
            <div
              
            >
              <div className="sidebar__menu">
               
                    <img width="100"
                      className="LogoDesktop LogoDesktop--header"
                      src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
                      alt="logo"
                    />
                   <div className="moblie-close" >
                      <i class="fa fa-times" onClick={() => {this.setCollapse()}} id="sidebarIcon" aria-hidden="true"></i>
                  </div>
                   
             
              <h2>MNG</h2>
              <div className="h-100 ">
                  <div className="sidebar__link">
                    <i className="fa fa-user-secret" aria-hidden="true"></i>
                    <a href="/">Main Page</a>
                  </div>
                  <div className="sidebar__link active_menu_link">
                    <i className="fas fa-box" aria-hidden="true"></i>
                   
                    <a href="/dashboard"> Products</a>
                  </div>

                 
                  <div className="sidebar__link">
                    <i className="fa fa-wrench"></i>
                    <a href="#">Ecosystem</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Startup</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-handshake-o"></i>
                    <a href="#">Coompanies</a>
                  </div>
                  <h2>LEAVE</h2>
                  <div className="sidebar__link">
                    <i className="fa fa-question"></i>
                    <a href="#">Requests</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-sign-out"></i>
                    <a href="#">Leave Policy</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-calendar-check-o"></i>
                    <a href="#">Events</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-files-o"></i>
                    <a href="#">projects</a>
                  </div>
                  <h2>PAYROLL</h2>
                  <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Payroll</a>
                  </div>
                  <div className="sidebar__link">
                    <i className="fa fa-briefcase"></i>
                    <a href="#">News</a>
                  </div>
                  <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                  </div>
                          
                      <div>
                       
                      </div>
                    </div>
                    </div>
                  </div>
                </aside>
             <div
            onClick={() => {
              this.setCollapse({ });
            }}
            className={this.state.collapse? 'overlay' : 'overlay active'}
          ></div>
        </div>
      );
    };
    
    }
  
// SideNav.propTypes = {};

export default SideNav;

