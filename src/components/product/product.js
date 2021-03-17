import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
// import { Map, GoogleApiWrapper } from 'google-maps-react';/
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import ProductForm from "./form.js"
import  Trl  from "./trl.js"


class Products extends Component {
  constructor(props){
    super(props)
    this.state ={

    current: 1,
    model:false,
    text:""
   }
  }

  componentWillMount() {
    this.props.fetchProducts();
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.newPost) {
    //   this.props.posts.unshift(nextProps.newPost);
    // }
  }

  openModel= (e)=>{
    e.preventDefault()
    this.setState({
      model: !this.state.model
    });
  }

  toggle =(index)=> {
    this.setState({
      current: index
    });
  }
// Finish!


  render() {

    const defaultProps = {
      center: [59.938043, 30.337157],
      zoom: 9,
      greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };

    const center = {
      lat: -3.745,
      lng: -38.523
    };

    const containerStyle = {
      width: '370px',
      height: '400px'
    };

    return (
      <div>
        <div className="page pl-lg-2 bg-light-ash pt-lg-2 pr-lg-4  ml-lg-2">
        <div class="main__cards"><div class="card"><i class="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i><div class="card_inner"><p class="text-primary-p">User</p><span class="font-bold text-title">Clever</span></div></div><div class="card"><i class="fa fa-calendar fa-2x text-red" aria-hidden="true"></i><div class="card_inner"><p class="text-primary-p">Type</p><span class="font-bold text-title">Fruit</span></div></div><div class="card"><i class="fa fa-video-camera fa-2x text-yellow" aria-hidden="true"></i><div class="card_inner"><p class="text-primary-p">Company Name</p><span class="font-bold text-title">INNO loft</span></div></div><div class="card"><i class="fa fa-thumbs-up fa-2x text-green" aria-hidden="true"></i><div class="card_inner"><p class="text-primary-p">Number of Likes</p><span class="font-bold text-title">645</span></div></div></div>
         
            <div className="a">
            <div className="d-flex flex-wrap z-0">
              <div className="mt-2 image-body  charts__left pix" 
              style={{background:"url("+this.props.products.picture+")"}}>
              </div>
             
               {
                    this.props.products.type === undefined ?
                    <div></div>
                    :
                    <div className="info mt-2 charts__left pix">
                        
                        <div className="div-title">
                        <button onClick={this.openModel} name="accept" class="button accept">Edit</button>
                            <h1>Product main info</h1> 
                           
                         </div>
                         <br/>
                         <div className="div-para">
                           <p>Products Name : {this.props.products.name}</p>
                           <p> Products Type  { this.props.products.type.name}</p>
                           </div>
                      
                     </div>
                 }
               </div>
               <div className=" charts__left ">
                 <div className="div-descrip">
                 {/* <h1> Description tab</h1> */}
                   </div>
                      <div>

                        <div class="">
                          <button onClick={this.toggle.bind(this, 1)} name="accept" class="button accept">Description</button>
                          <button name="cancel" onClick={this.toggle.bind(this, 2)} class="button cancel">Attributes </button>
                        </div>

                        <div
                          className={`collapsible ${
                            this.state.current === 1 ? "open " : "close"
                          }`}
                        >
                        
                          {
                          <p>{this.props.products.description}</p>  
                          }


                       </div>
                    <div
                        className={`collapsible ${
                          this.state.current === 2 ? "open " : "close"
                        }`}
                      >
                           <h1>   Business Models</h1> 
                    
                            {      
                                this.props.products.businessModels === undefined ?
                                  <div>
                                    
                                  </div>
                                  :
                                  <div className="div-para">
                                    
                                    {
                                        this.props.products.businessModels.map((category, i) => (
                                         <div>
                                            <p>  {category.name} </p>
                                           

                                         </div>
                                         
                                      
                                          ))
                                      }
                                        <input  />
                                  </div>
                            }
                             <h1> Attributes tab</h1> 
                                {
                                  this.props.products.categories  === undefined ?
                                    <div>
                                      
                                    </div>
                                    :
                                    <div className="div-para">
                                    
                                      {
                                          this.props.products.categories.map((category, i) => (
                                    
                                           
                                              <dv>
                                                <p>  {category.name} </p>
                                               
                                              </dv>
                                            ))
                                        }

                                  <input  />
                                    </div>
                              }

                              
                         < Trl />
          
                     </div>

                </div>
                 
                  {/* {
                    this.props.products.description
                  } */}
                </div>
              
            </div>
            <div className="a">
            <div className="d-flex flex-wrap z-0">
              {
                this.props.products.user === undefined ?
                  <div></div>
                  :
                  <div className="info mt-2 charts__left map-user-info">
                     <div className="div-title">
                       <h1>User info</h1> 
                    </div> 
                  
                      <p><img src={this.props.products.user.profilePicture}   /></p> 
                       <div className="div-para">
                            <p><b>Email</b> : {this.props.products.user.email} </p>
                            <p><b>First Name </b> : {this.props.products.user.firstName} </p>
                            <p><b>Last Name</b> : {this.props.products.user.lastName} </p>
                            <p><b>Name </b> : {this.props.products.user.email} </p>
                       </div>
                        
                        
                         <div className="div-title">
                            <h1> Company info</h1> 
                          </div> 
                 
                      <div >
                        <div className="div-para">
                            <p><b>Company Name</b> : {this.props.products.company.name} </p>
                        </div>
                      </div>

                  </div>
              }
             

              <div className="info mt-2 charts__left map-user-info">
                 <div className="div-title">
                <h1>Map</h1>    
                </div>
                {
                this.props.products.company === undefined  ?
                  <div> </div>
                  :
                  <div>
                    {
                      console.log("company data -------->", this.props.products.company .address.latitude )
                    }
                    <LoadScript
                      googleMapsApiKey="API KEY GOOGLE MAP"
                    >
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        
                        zoom={10}
                        initialCenter={
                          {
                            lat: this.props.products.company .address.latitude,
                            lng: this.props.products.company .address.longitude,
                          }
                        }
                      >
                       
                        <></>
                      </GoogleMap>
                  </LoadScript>

                  </div>
                }
                  
               
              
              </div>
            </div>
           </div>
       </div>
       {
         this.state.model === true ?
         <div class="profile-loader-payment">
              <div className="profile-pre-loader-payment"> 
                <b>EDIT</b>
                  <a class="button is-danger" onClick={this.openModel} style={{float:"right"}}>
                    <span class="icon is-small">
                    <i class="fas fa-times"></i>
                    </span>
                  </a>
              <br/>
               <ProductForm/>
                
                <br/>
                 
            </div>
          </div> 
          :
          <div></div>
       }
           
      </div>
    );
  }
}

Products.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  // newPost: PropTypes.object
};

const mapStateToProps = state => ({
  products: state.products.items,
  // newPost: state.posts.item
});

export default  connect(mapStateToProps, { fetchProducts })(Products);