import React from "react";
import ReactDOM from "react-dom";
let unlist = [];
export default class ToDoList extends React.Component {
  state = {
    toDoS: [
      
    ],
    uncompleted:[],
    currentActivity: "",
    errorMessage:"",
    counter:0,
  };
  handleOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleListOnChange = (event) => {
    let toDoS = this.state.toDoS;
    let index = ReactDOM.findDOMNode(event.target).parentNode.getAttribute(
      "alt"
    );
    switch (event.target.type) {
      case "checkbox":
        toDoS[index].checked = !toDoS[index].checked;
        if (toDoS[index].checked) {
         
          ReactDOM.findDOMNode(event.target).parentNode.classList.add(
            "selected" );
           this.setState({counter:this.state.counter+1})
        } else {
          ReactDOM.findDOMNode(event.target).parentNode.classList.remove(
            "selected"
          );
          this.setState({counter:this.state.counter-1})
        }
        this.setState({ toDoS });

        break;
      case "button":
        toDoS.splice([index], 1);
        
        this.setState({ toDoS,counter:this.state.counter-1 });
        break;
      default:
        break;
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.currentActivity){
    this.state.toDoS.push({
      Dati:this.state.currentActivity, checked:false    })
      this.setState({
      currentActivity: "",
      errorMessage:""
    })
  }else{
    this.setState({
      errorMessage:"l'attività non può essere vuota"
    })
  }
  }
  deleteList=(event)=>{
    if(event.target.alt==="true"){
    this.setState({toDoS:unlist})
    let divs=document.getElementsByClassName("selected")
    for(var i=0;i<divs.length;i++){
      if(divs[i].getAttribute("class")==="selected"){
        divs[i].classList.remove("selected");
      }
    }
    
    }else{
      this.setState({toDoS:[]})
    }

     
  
  }
  render() {
    unlist=[];
    const list = [];
    const Clist= []; //completed list
    const Ulist= []; //uncompleted list
   
    this.state.toDoS.forEach((toDoS, i) => {
      list.push(
        <div key={i} alt={i}>
          {toDoS.Dati}
          <input
            type="checkbox"
            name="checked"
            checked={toDoS.checked}
            onChange={(event) => this.handleListOnChange(event)}
          />
          <input
            style={toDoS.checked ? { display: "" } : { display: "none" }}
            type="button"
            value="Rimuovi"
            onClick={(event) => this.handleListOnChange(event)}
          />
        </div>
      );
    if(toDoS.checked){
      Clist.push(
        <p key={i}>
          {toDoS.Dati}
          <input type="checkbox" checked={true}/>
        </p>
      )
    }else{
      Ulist.push(
        <p key={i}>
          {toDoS.Dati}
          <input type="checkbox" checked={false}/>
        </p>
      )
      unlist.push(
        {Dati:toDoS.Dati,checked:toDoS.checked}
      )
    
    }
   //   {toDoS.checked ? :}
    });

    return (
      <div>
        {list}
        <form onSubmit={this.handleSubmit}>
          <input
            name="currentActivity"
            type="text"
            value={this.state.currentActivity}
            placeholder="Inserisci elemento"
            onChange={(event) => this.handleOnChange(event)}
          />
          <p>Stai per aggiungere l'attività: {this.state.currentActivity}</p>
    <p style={{color:"red"}}>{this.state.errorMessage}</p>
    <p>attività completate: {this.state.counter}</p>
          <button type="submit">Conferma</button>
        </form>
        <input type="button" value="Cancella lista" onClick={this.deleteList} />
        <input type="button" style={Clist.length>0?{ display:"block",margin:"auto",color:"blue"}: {display:"none"}}value="Cancella lista completata" alt={"true"} onClick={(event)=>this.deleteList(event)} />
        <div ><br/>
    <div id="completed" style={{float:"left",margin:"auto 2vh "}} >attività Completate:<br/>{Clist}</div>
    <div id="toComplete"style={{float:"right",margin:"auto 2vh"}}>attività da Completare:  <br/>{Ulist}</div>
        </div>
      </div>
    );
  }
}
