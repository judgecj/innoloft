import React, { Component } from 'react';
import Modal from "react-modal";
import { createProduct  } from '../actions/productActions';
// import Close from "./cancel.svg";
import MarkdownInput from "@opuscapita/react-markdown";
import MarkdownPreview from '@uiw/react-markdown-preview';
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



class  ProductForm extends Component {

  constructor(props){
    super(props)
    this.state ={
      html:""
    }
  }


  handleEditorChange=(html, text)=> {    
    console.log('handleEditorChange', html,)
    this.setState({
      html:html
    })
  }
  
  
 

  onChange=(e)=> {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitData=(e) =>{
    e.preventDefault();

    const product = {
      text: this.state.html,
      status : true,
    };

    this.props.createProduct(product);
  }

  render() {


    
    const mdParser = new MarkdownIt(/* Markdown-it options */);
    

    

  
    return (
        
        <div>

            <p  style={{fontSize:"110%"}}>
                <div style={{ height: '70vh' }}>
                <hr/>
                 <MdEditor
                    style={{ height: "500px" }}
                    renderHTML={(text) => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                  />
                 
                </div>


              </p>
              <br/>
                    <button onClick={this.submitData} name="accept" class="button accept">Description</button>
                  <br/>
        </div>
          
              

    )

}





}

// export default  ProductForm
ProductForm.propTypes = {
  createProduct : PropTypes.func.isRequired
};

export default connect(null, { createProduct  })( ProductForm);