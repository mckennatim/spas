# sb-react

## tags
### 02-setStateOrRerender
React UI only rerenders whenever you call setState() or ReactDOM.render().The props need to come from state as in `{El3(this.state.el3)}` or `<Welcom name={this.state.we.name}/>` or they won't rerender on a change of state.  So realistically a stateless functional component (that might change after initial render) has to be fed its props from its enclosing containers state.
Then any async happening must eventually affect the setState of the container.

The downside is that every component inside the container gets rerendered even if it only takes a small portion of the state that hasn't mutated.


### 01-initial-c0mmit
All the ways you can have react render you a ui. as simple functions, classes, or components in es6, with or without a return.

My best shot at functional programming with a simple function returning a react page

    function Welcom(props){
        return(
                <h5>welcom {props.name}</h5>                
            )
    }

which can be implanted in a page(or called from a navigo route)     

    const App = (props) =>(
        <div>
        <h4>hello blank es6 react</h4>
        <Wel name='fred'/>
        <Welc name='dirt'/>
        <Welco name='funcy'/>
        {Welcom(store)}
        </div>
    )

grabbing its current props from the state of the store at the moment it is called. Thats because mapstoreToProps

    function mapStoreToProps(anElement){
      //returns a function called later with store as its arg and anElement from here
      return (store)=>{  
        const props= {
          name: store.name
        }
        var el = React.createElement(anElement, props)
        return el
      }
    }

takes an element as an argument, returning a function that takes store as an argument that returns the result of React.createElement for the element with some portion of the store as its props