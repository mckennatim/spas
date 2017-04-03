import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';

/*-------------------------------------------------------*/
const Wel = (props) =>(
  <h5>inner {props.name}</h5>
)

/*-------------------------------------------------------*/


const We = (props) => {
  var clicks = Rx.Observable.fromEvent(document, 'click');
  // Each click event is mapped to an Observable that ticks every second
  var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
  var switched = higherOrder.switch();
  // The outcome is that `switched` is essentially a timer that restarts
  // on every click. The interval Observables from older clicks do not merge
  // with the current interval Observable.
  switched.subscribe(x => console.log(x));  
  return(
    <h5>Rx inner {props.name}</h5>
  )
}
/*-------------------------------------------------------*/
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <h5>wlecome back</h5>;
  }
  return <h5>fuck off</h5>;
}

class Welc extends React.Component{
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }    
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }   
    return(
        <div>       
          <h5>welc {this.props.name} {isLoggedIn}</h5>  
          <Greeting isLoggedIn={this.state.isLoggedIn}/>
            {button}      
        </div>
      )
  }
}
/*
setState causes a rerender of the component from which it is called. 
That causes a re-render of the children (with those states?)

So the child vaco is getting changes of 
<Vaco name='timothy' olddog={this.state.dog}/><hr/> so props.olddog changes
based on the Observable.
*/
function Cvaco(props){
  console.log(props)
  return(<div>
    <h4>Cvaco {props.pr.dog} {props.zd} {props.pr.name}</h4>
    <input type="text" value={props.zd} onChange={props.cChangeIt}/>
    <button onClick={props.stBypass}>set bypass</button>
    <button onClick={props.csubmi}>Submit</button>
    </div>)
}
class Vaco extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.setBypass=this.setBypass.bind(this)
    this.changeIt=this.changeIt.bind(this)
    this.submi=this.submi.bind(this)
    this.whichDog=this.whichDog.bind(this)
    this.state ={...props, dog: props.olddog, bypass: false, cdog:props.olddog}
    console.log(this.state)
  }
  setBypass(){
    this.setState({dog:'Ulysses', bypass:true}, ()=>{
      console.log(this.state)
      //this.props.addDog(this.state.dog)
    })
  }
  submi(){
    if(this.state.bypass){
      this.setState({bypass:false},()=>{
        console.log(this.state)
        this.props.addDog(this.state.dog)
      })
    }
  }
  changeIt(x){
    console.log(x.target.value)
    this.setState({dog: x.target.value, bypass:true}, ()=>console.log(this.state))
  }
  whichDog(){
    console.log(this.state.bypass)
    if (this.state.bypass){
      return this.state.dog
    } else {
      return this.props.olddog
    }
  }
  render (){
    const thedog = this.whichDog()
    return (
      <div>   
        <h4>Vaco {this.state.dog} {this.props.olddog} {this.state.bypass}</h4>
        <Cvaco  pr={this.state} 
                zd={thedog} 
                cChangeIt={this.changeIt}
                stBypass={this.setBypass}
                csubmi={this.submi}
        ></Cvaco>
        <h5>observe var {this.props.name}</h5>
      </div>
  )}
}
/*-------------------------------------------------------*/
function Cva(props){
  return(
    <h4>Va {props.dog}</h4>
    )
} 
const Va = (props)=>{
  console.log(props)
  var state={dog:'Fritz'}

  function setBypass(){
    console.log('set ')
    state={...state, dog: 'Petey'}
  }
  function unsetBypass(){
    console.log('unset')
  }
  return (
    <div>   
      <h4>Va  </h4>
      <Cva dog={state.dog}></Cva>
      <h5>observe var {props.name}</h5>
      <button onClick={setBypass}>set bypass</button>
      <button onClick={unsetBypass}>un-set bypass</button>
    </div>
  )
}

/*-------------------------------------------------------*/

// const propsObs = Rx.Observable.from(['Butler', 'Fritz', 'Dusty', 'Petey'])
// const inte = Rx.Observable.interval(1000).take(4)
var props={olddog:'Rusty'}
// const propsOverTime = propsObs.zip(inte, (aprop,intx)=>aprop) 
// propsOverTime.subscribe((x)=>{
//     props={...props, olddog:x}
//     console.log(props)
//   }
// )
class App extends React.Component{
  constructor(props){
    super(props)
    console.log(props)
    this.state ={...props, dog: props.olddog}
    console.log(this.state)    
    this.arr=['Butler', 'Fritz', 'Dusty', 'Petey']
    this.createObs()
    //just binding
    this.aNewDog=this.aNewDog.bind(this)   
    this.createObs=this.createObs.bind(this)   

  }
  createObs(){
    const propsObs = Rx.Observable.from(this.arr)
    const inte = Rx.Observable.interval(1000).take(this.arr.length)
    const propsOverTime = propsObs.zip(inte, (aprop,intx)=>aprop)
    this.subs=propsOverTime.subscribe((x)=>{
        console.log(x)
        this.setState({dog:x})
      }
    )    
  }
  aNewDog(newdog){
    console.log('theres a new dog in town, '+newdog)
    console.log(newdog)
    this.arr.push(newdog)
    console.log(this.arr)
    console.log(this.subs)
    //this.subs.unsubscribe()
    this.createObs()
  }
  render(){
    return(
      <div>
      <h4>hello blank es6 react {this.state.dog}</h4>
      <hr/>
      <Vaco name='timothy' olddog={this.state.dog} addDog={this.aNewDog}/><hr/>
      {/*<Va name='tim'/><hr/>*/}
      {/* <We name='eweber'/> */}
      <Welc name='dirt'/><hr/>
      </div>
    )    
  }
}

const container = document.getElementById('app');

ReactDOM.render(<App {...props}/>, container)

