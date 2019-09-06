import React,{Component} from 'react'


class AddElement extends Component {
    state = {
        name:null,
        age:null,
        belt:null
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.addNew(this.state)
    }
    render(){
        return (
            <div className="container">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name" className="label">Name:</label>
                <input className="input" type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="age" className="label">Age:</label>
                <input className="input" type="text"  id="age" onChange={this.handleChange} />
                <label htmlFor="belt" className="label">Belt:</label>
                <input className="input" type="text"   id="belt" onChange={this.handleChange} />
                <button className="button">Submit</button>
            </form>

            </div>
        )
    }
}

export default AddElement