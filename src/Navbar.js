import React from 'react';

const Navbar = ({data,deleteNew}) => {
        return (
            <div className="container">
                {
                    data.map(element=>{
                        return element.age >20 ? (
                            <div className="container" key={element.id}>
                                <div>Id: {element.id}</div>
                                <div>Name: {element.name}</div>
                                <div>Age: {element.age}</div>
                                <div>Belt: {element.belt}</div>
                                <button className="button" onClick={() => {deleteNew(element.id)}}>Delete</button>
                            </div>  
                        ) : null
                    })
                }
            </div>
        )

}

export default Navbar