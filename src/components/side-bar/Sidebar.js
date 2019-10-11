import React from 'react'
import styled from 'styled-components'
import profile from '../../img/profile.png'

const Aside = styled.aside`
    margin: 0;
    padding: 0;
    width: 400px;
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
    margin: 150px 0px 0px 0px;
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
      font-size:25px;
      color:white;
`
const NavUl = styled.ul`

`
const NavLi = styled.li`
      font-size:20px;
      color:white;
`
const MenuDiv = styled.div`
        margin: 50px 0px 0px 120px;
        text-align:justify;
        
`

const Sidebar = () => {
    return (
        <Aside>
            
            <center>
                <Canvas src={profile} alt="profile"></Canvas>
                <FullName><strong>Komla Sodji</strong></FullName>
                <MenuDiv>
                    <NavUl>
                        <NavLi>Home</NavLi>
                        <NavLi>my profile</NavLi>
                        <NavLi>personal projects</NavLi>
                        <NavLi>Portfolio</NavLi>
                        <NavLi>send me a message </NavLi>
                    </NavUl>
                </MenuDiv>
                
            </center>
        </Aside>
    )
}

export default Sidebar