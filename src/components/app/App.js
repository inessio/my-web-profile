import React,{Component} from 'react';
import './App.css';
import Sidebar from '../side-bar/Sidebar'
import Content from '../../Content'
import styled from 'styled-components'

const Frame = styled.div`
    width:100%;
    background-color: snow;
   
`
class App extends Component {

  state = {}

  // addNew = (data) =>{
  //   data.id = Math.random()
  //   let element = [...this.state.data,data]
  //   this.setState({
  //     data:element 
  //   })
  // }
  // deleteNew = (id) => {
  //   console.log(id)
  //   let elements = this.state.data.filter(element => {
  //     return element.id !==id
  //   })
  //   this.setState({
  //     data:elements
  //   })
  // }
  render(){
    return (
      <Frame>
          <Sidebar />
          <Content />
           {/* <AddElement addNew={this.addNew}  /> */}
      </Frame>
       
    );
  } 
  
}

export default App;
