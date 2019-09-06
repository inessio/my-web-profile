import React,{Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import AddElement from './AddElement'


class App extends Component {
  state = {
    data:[
      {name:"sodji",age:26,belt:"black",id:1},
      {name:"komlan",age:30,belt:"black",id:2},
      {name:"inessio",age:38,belt:"black",id:3}
    ]
  }

  addNew = (data) =>{
    data.id = Math.random()
    let element = [...this.state.data,data]
    this.setState({
      data:element 
    })
  }
  deleteNew = (id) => {
    console.log(id)
    let elements = this.state.data.filter(element => {
      return element.id !==id
    })
    this.setState({
      data:elements
    })
  }
  render(){
    return (
      <div className="App">
        <header className="container">
          <h1>welcome to my react website</h1>
        </header>
        <Navbar data={this.state.data} deleteNew={this.deleteNew} />
        <AddElement addNew={this.addNew}  />
      </div>
    );
  } 
  
}

export default App;
