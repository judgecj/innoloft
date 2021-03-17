import React, { Component } from 'react';



const Auth = new AuthService();
class AdminDoposit extends Component {
    constructor(props){
        super(props)
        this.state = {
            noerorrpage :  true,
            loading : false,
            errorend  : false,
           
            domain:"https://giftend.herokuapp.com/",
            categories:[],
            category:null,
            showUpgrade:false,
        }
    }

    componentDidMount(){
     
        this.props.noerorrpage(this.state.noerorrpage)
        if(Auth.loggedIn()){
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' ,
                'x-access-token': Auth.getToken() },   
            };
        
            fetch(this.state.domain+"deposits/", requestOptions)
            .then(res => res.json())
            .then((result)=>{
                  // console.log("public this.slugify", result)
                this.setState({
                //    frinedUrl: this.slugify(result.name)
                deposits:result.data
                })
              }).catch( (error) => {
                // console.log("errro", error);
                this.setState({
                    errorend  : true,
                    noticeMassage : "Not update",
                })   
             });

             fetch(this.state.domain+"categories", requestOptions)
             .then(res => res.json())
             .then((result)=>{
                      //  console.log("public this.slugify", result)
                     this.setState({
                     //    frinedUrl: this.slugify(result.name)
                     categories:result
                     })
                   }).catch( (error) => {
                     console.log("errro", error);
                     this.setState({
                         errorend  : true,
                         noticeMassage : "Not update",
                     })   
             });
         
            
            // var email = "admin@peppement.com"
            return fetch(this.state.domain+"api/users/"+ Auth.getProfile().id, requestOptions )
            .then(res => res.json())
            .then(res => {
              if(res.status === "true"){
                // console.log("result  ----------->>    adminConfirm  res", res.data.adminConfirm)
                  if(res.data.adminConfirm === true){
                   
                  }else{
                    window.location.replace('/dashboard');
                  }
                }     
             })

            
        }
    }

    getdata=(data)=>{
      console.log(data)
      if(data.confirm === false){
        //   console.log("data false ------------>",data.confirm)
        this.setState({
            data:data,
            showModal:true,
            tech:"false",
           
        })
      }else{
        // console.log("data true ------------>",data.confirm)
        this.setState({
            data:data,
            showModal:true,
            tech:"true",
        })
      }
      
    }

    submitConfam=(data)=>{
        // e.preventDefault()
        this.setState({
          // confirmation :false,
          loading:true
        })
        
        const newdata = {
          id:data._id,
          confirm:this.state.walletCoin,
          profit:this.state.inputAmout
        }
        // console.log("data----------->sumbit",data,newdata)
         const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
           body: JSON.stringify(newdata),
       };
        fetch(this.state.domain+"deposits/confirm/"+data._id, requestOptions)
            .then(res => res.json())
            .then((res)=>{
              if(res.status === "true"){
                toast.success("Updated ");
                 this.timeout() 
                // console.log("data----------->sumbit",res)
              }
          })
      }

      timeout() {
        setTimeout(function() {
        //   window.location.replace('dashboard');
            this.setState({
                loading:false,
                showModal:false
            })
        //   console.log(this.state.noticeshow);
        }.bind(this), 4000);
    }

      handleChange=(e)=>{
        if(e.target.value  ===  "false"){
          // console.log("data ----->log BTC",e.target.value)
          this.setState({
            tech: e.target.value,
            walletCoin:false
          })
        }else if(e.target.value ===  "true") {
          // console.log("data ----->log Etheruem",e.target.value)
          this.setState({
            tech: e.target.value,
            walletCoin:true
          })
        }
      }


      inputChange=(e)=>{
      
        // console.log(e.target.value);
        this.setState({
          inputAmout:e.target.value,
  
        })
      }
      

      signUpClose=()=>{
        this.setState({
            data:null,
            showModal:false,
            showUpgrade:false
        })
    }

    selectCategory = (e)=>{
        //  console.log("data--===------> category", e.target.value)
        this.setState({
        //    loanData:true,
           category:e.target.value
        })
    
        
      
     }

     moveUp=(data)=>{
      console.log(data)
      this.setState({
          data:data,
          showUpgrade:true
      })
  }


  submitUpdate=(data)=>{
      // e.preventDefault()
      if(data.category === undefined || data.category === null){

        this.setState({
          loading:true
        })
        
        const newdata = {
          id:data._id,
          category:  this.state.category,
        //   profit:this.state.inputAmout
        }
        console.log("data----------->sumbit",newdata)
         const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
           body: JSON.stringify(newdata)
       };
        fetch(this.state.domain+"deposits/category/"+data._id, requestOptions)
            .then(res => res.json())
            .then((res)=>{
              if(res.status === "true"){
                toast.success("Updated ");
                  this.setState({
                    showUpgrade:false
                  })
            //    this.timeout() 
                // console.log("data----------->sumbit",res)
              }
          })

      }else{
      if(data.category._id === this.state.category ){
          // console.log("data------yes-------->",this.state.category,  data.category._id)
      }else{
          // console.log("data------no-------->",this.state.category,   data.category._id)
          this.setState({
                loading:true
              })
              
              const newdata = {
                id:data._id,
                category:  this.state.category,
              //   profit:this.state.inputAmout
              }
              // console.log("data----------->sumbit",newdata)
               const requestOptions = {
                 method: 'POST',
                 headers: { 'Content-Type':'application/json','Access-Control-Allow-Origin': '*' },
                 body: JSON.stringify(newdata)
             };
              fetch(this.state.domain+"deposits/category/"+data._id, requestOptions)
                  .then(res => res.json())
                  .then((res)=>{
                    if(res.status === "true"){
                      toast.success("Updated ");
                        this.setState({
                          showUpgrade:false
                        })
                  //    this.timeout() 
                      // console.log("data----------->sumbit",res)
                    }
                })
        }
      }
  }
  

  render() {
    

    return (

          <div>              
                
          </div>                   
    
       )

}





}

export default AdminDoposit;