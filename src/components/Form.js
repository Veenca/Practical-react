import React from "react"

const initialState ={
    name: '',
    email: '',
    password: '',
    nameError:'',
    emailError:'',
    passwordError:'',
}

export default class Form extends React.Component{
    state= initialState;
handleChange=(event)=>{

    this.setState({ [event.target.name]:event.target.value});
    
}
validate=()=>{
    let nameError='';
    let emailError='';
    let passwordError='';
   if(!this.state.name){
       nameError="il nome non può essere vuoto"
   }
   if(this.state.password.length<8){
       passwordError="la passoword deve contenere minimo 8 caratteri"
   }
    if(!this.state.email.includes('@')){
        emailError="email non valida";
    }
    
    if(emailError || nameError || passwordError){
        this.setState({emailError,nameError,passwordError})
       
        return false
    }
    return true;
}
handeSubmit = (event) =>{
   event.preventDefault();
   const isValid = this.validate();
   if(isValid){
    console.log(this.state);
    this.setState(initialState);
}
}
    render(){
        return(
            <form onSubmit={this.handeSubmit}>
                <input name="name" placeholder="name" value={this.state.name} onChange={event=>this.handleChange(event)}/><br/>
                <div className="error">{this.state.nameError}</div>
       <input name="email" type="text" placeholder="email" value={this.state.email} onChange={event=>this.handleChange(event)}/><br/>
        <div className="error">{this.state.emailError}</div>
       <input type="password" name="password" value={this.state.password} placeholder="password"onChange={event=>this.handleChange(event)}/><br/>
      
       <div className="error">{this.state.passwordError}</div>
        <button type="submit">Invia</button>
            </form>
       
        );
    }
}
