import React from 'react';
import {VerifyList} from './VerifyList.js'

class Verify extends React.Component{
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {res: ["frog"], dog:'uly'}
  }

  componentDidMount(){
    var raw = this.props.responsive.page.params.query.split('=')[1]
    var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${raw}`
    console.log(url)
    fetch(url)
      .then((response)=>response.json())
      .then((json)=>{
        //console.log(json)
        this.setState({res: json.results})
        console.log(this.state)
        console.log(json.results)
      })    
  }
  //const {devices, name} = props
  //raw = this.props.responsive.page.params.query.split('=')[1]
  //console.log(props)
  // var url = `http://maps.googleapis.com/maps/api/geocode/json?address=${raw}`
  // fetch(url)
  //   .then((response)=>response.json())
  //   .then((json)=>{
  //     this.setState({res: response.json()})
  //     //console.log(res[0])
  //   })

  render(){
    console.log(this.state)
    return(
      <div>
        <div style={styles.outer} >
          <h4>in Verify </h4>
          <VerifyList dlst={this.state.res}/>
        </div>
      </div>
      )
    }    
}
function mapStoreToProps(anElement){
  //returns a function called later with store as its arg and anElement from here
  return (store)=>{  
    const props= store
    return React.createElement(anElement, props)
  }
}

Verify = mapStoreToProps(Verify)

export {Verify}
const styles= {
  outer: {
    background:'#9338f4',
    height: 400,
    textAlign: 'center'    
  },
  inner: {
    margin: '0 auto',
    background: '#FFF28E',
    height: 340,
    color: 'red',
    textAlign: 'center',
    fontSize: '300%'
  }
}