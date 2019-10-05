import React from 'react'
import styled from 'styled-components'
import profile from './img/profile.png'

const Aside = styled.aside`
    margin: 0;
    padding: 0;
    width: 350px;
    background-color: steelblue;
    position: fixed;
    height: 100%;
    overflow: auto;
    @media screen and (max-width: 700px) {
        width: 100%;
        height: auto;
        position: fixed;
        content {margin-left: 0;}
      };
`
const Canvas = styled.img`
    border-radius: 50%;
    width: 150px;
    margin: 150px 0px 10px 100px;
    @media screen and (max-width: 700px) {
        width: 75px;
        height:auto;
        margin: 10px 0px 10px 50px;
    }
    @media screen and (max-width: 400px) {
        width:30px;
        margin:5px 0px 0px 2px;
      }
`

const FullName = styled.h2`
      font-size:20px;
      color:white;
`

const Sidebar = () => {
    return (
        <Aside>
            <Canvas src={profile} alt="profile"></Canvas>
            <center><FullName>Komlan Inessio Sodji</FullName></center>
        </Aside>
    )
}

export default Sidebar