https://www.learnrxjs.io/

## log
### rxtry-setState-wObs_bypassObs-editthenadd
Ok so it should edit and replace, add only for new but...

To get a re-render to happen you either have to ReacDOM.re-render or use a class component and setState()

So any observable will only talk to a component if one of the above is called in the subscribe callback

    this.subs=propsOverTime.subscribe((x)=>{
        console.log(x)
        this.setState({dog:x})
      }
    )

To render conditionally either the local value or the one coming in from Obs, set a key like `bypass:true/false` and then in the render function send either the prop(incomingObs) or the state(beingEditied) to the functional stateless component 

        <Cvaco  pr={this.state} 
                zd={thedog} 
                cChangeIt={this.changeIt}
                stBypass={this.setBypass}
                csubmi={this.submi}
        ></Cvaco>

    function Cvaco(props){
      console.log(props)
      return(<div>
        <h4>Cvaco {props.pr.dog} {props.zd} {props.pr.name}</h4>
        <input type="text" value={props.zd} onChange={props.cChangeIt}/>
        <button onClick={props.stBypass}>set bypass</button>
        <button onClick={props.csubmi}>Submit</button>
        </div>)
    }

#### question http://stackoverflow.com/questions/41336565/on-using-rxjs-to-update-props-of-a-react-functional-stateless-component
##### answer
    const propsObs = Rx.Observable.from(['Butler', 'Fritz', 'Dusty', 'Petey'])
    const inte = Rx.Observable.interval(1000).take(4)
    var props={olddog:'Rusty'}
    const propsOverTime = propsObs.zip(inte, (aprop,intx)=>aprop) 
    propsOverTime.subscribe((x)=>{
      props={...props, olddog:x}
      ReactDOM.unmountComponentAtNode(container)
      ReactDOM.render(<App {...props}/>, container )
    })
    const container=  document.getElementById('app')
    const App = (props) =>{
      console.log(props.olddog)
      const getDog=()=>props.olddog
      const thedog = getDog()
      return(
        <div><h4>hello {thedog}</h4></div>)
    }

"A functional React component is just that.. a function. It's not "watching" its own props for changes. Something upstream must call your function to get new JSX. If you have an enclosing component that extends React.Component then you can call setState and pass in new props, or in your case, simply call ReactDOM.render with your updated JSX."" azium

The 'magic' makes more sense now, If you are subscribing to an observable, the function that runs whenever something happens is where ReactDOM.render goes like this: htpps://jsbin.com/xenupe/1/edit?html,js,console,output 

## notes
setState causes a re-render of the component from which it is called. 
That causes a re-render of the children (with those states?)

So the child vaco is getting changes of 
`<Vaco name='timothy' olddog={this.state.dog}/><hr/>` so `props.olddog` changes
based on the Observable.

#### what to do

Dogs come in from olddog as an Observable stream. They show up on the input. But once you go and modify the input, then the input should reflect those changes and ignore the stream. Once you submit an action is created that adds the new item to the observable array AND again the input starts reflecting the stream.