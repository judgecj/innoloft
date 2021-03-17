import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Add from './add.svg';
import "./App.css";
import store from './store';
import { Provider } from 'react-redux';
import Main from "./components/Dashboard/main.js"
import SideNav from  "./components/sidenav/sidenav.js"
import Header from "./components/header/head.js"
// import Posts from "./components/product/product"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch 
} from 'react-router-dom'


class App extends Component {

  constructor(props){
    super(props)
    this.state ={
        tasks:[],
        hoverMoblie:false,
        data:null,
        edit:false,
        selete:null,
        collapse:true
       
        // product:[]
      
    }

  }


  componentDidMount(){

            const requestOptions = {
                  method: 'GET',
                  headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,
                  },   
              };

            
            fetch(this.state.domain, requestOptions)
                    .then(res => res.json())
                    .then((result)=>{
                          // console.log("public this.slugify", result.data)
                        this.setState({
                       
                        tasks:result.data
                        })
                      }).catch( (error) => {
                        // console.log("errro", error);
                        this.setState({
                            errorend  : true,
                            noticeMassage : "Not update",
                        })   
              });

    }
  
    


    getCollapse = ( data) =>{
    console.log("data-------=------->",data)
    this.setState({
      collapse:data
    })
  
  }
  

    
  render() {
    
  
        return (
           <Provider store={store}>
             <div>


             <Header collapse={this.state.collapse} collapse={this.getCollapse} />
             <Router>
                <main class="h-100">
                  <div className="container- bg-white h-100">
                    <div className="d-flex pt-2 pl-3 pr-4 h-100">
                      <SideNav collapseData={this.getCollapse} collapse={this.state.collapse} />

                      {/* <Switch> */}
                        <Route exact path="/" />
                        <Route exact path="/dashboard" component={Main} />
                      {/* </Switch> */}
                    </div>
                  </div>
                </main>
                </Router>

                  {/* <header>
                      <div class="LogoLink">
                      <img class="LogoDesktop LogoDesktop--header" src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg" alt="logo"/>
                      </div>
                      <div class="Header__search">
                      <input id="searchbox" placeholder="Enter interest, keyword, company name, etc…..." class="Searchbox__input" type="text" value=""/>
                      <button class="Searchbox__button" type="submit"><i class="fas fa-search"></i></button>
                      </div>
                    
                  </header>

                  <div class="newTake-take">
                      <div class="row">
                        <div class="column left" >
                          <div className="product-item-body">
                            <div className="user-image-login">
                            <div class="user-image" >

                            </div>
                              <button class="product-Button"  >
                                  <span style={{marginRight:"10px"}}>
                                    <i class="fas fa-sign-out-alt"></i>
                                  </span>
                                  <span >Login</span>
                              </button>
                              
                            </div>
                              <div className="product-lists-item">
                                 <ul>
                                   <li>
                                     <div>
                                   
                                     </div>
                                   </li>
                                   <li>Love</li>
                                   <li>Love</li>
                                 </ul>
                              </div>
                          </div>
                        </div>
                        <div class="column middle" style={{backgroundColor:"#bbb"}}>
                          <h2>Column 2</h2>
                          <p>Some text..</p>
                        </div>
                        <div class="column right" style={{backgroundColor:"#ccc"}}>
                          <h2>Column 3</h2>
                          <p>Some text..</p>
                        </div>
                      </div>
                          

                   <hr />
                   <Posts />
                   </div> */}

                 </div>     
           </Provider>
        )


  }


}
export default App;
