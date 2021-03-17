import React, { Component } from 'react';
import Modal from "react-modal";
import { fetchTrls } from '../actions/productActions';
// import Close from "./cancel.svg";
// import style manually

import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class  Trl extends Component {

  constructor(props){
    super(props)
    this.state ={
      html:""
    }
  }


  componentWillMount() {

    
    this.props.fetchTrls();
  }


  render() {
    

    

  
    return (
        
        <div>

          {        
              this.props.trls === undefined ?
                        <div>
                          
                        </div>
                        :
                        <div className="div-para">
                          
                           {
                              this.props.trls.map((trl, i) => (
                        
                                <p>  {trl.name} </p>
                             
                                ))
                            }
                        </div>
                  }
             
        </div>
          
              

    )

}





}

// export default  Trl
Trl.propTypes = {
    fetchTrls: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    // newPost: PropTypes.object
  };
  
  const mapStateToProps = state => ({

    //   console.log("data-------->",state.trls.items)
    trls: state.products.trls,

  });
  
  export default  connect(mapStateToProps, { fetchTrls })(Trl);