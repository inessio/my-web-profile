import React from 'react'
import styled from 'styled-components'
import welcm from '../../img/welcm.svg'

const Wframe = styled.div`
    text-align:center;
    transition: 0.3s;
    padding: 20px;
    margin: 30px 100px 30px 100px;
`
const Wnote = styled.p`
    font-size:20px;
    text-align:center;
`

const Wimg = styled.img`
    padding-top:5px;
`
const Whead = styled.h1`
    font-size:40px;
    padding: 20px 20px 20px 20px;
    
    
`
const Skilldiv = styled.div`
   
`
const Span = styled.button`
padding:12px 12px;
margin: 10px;
border-radius:32px;
display:inline-block;
font-size:15px;
text-align: center;
margin-bottom: 4px;
margin-right: 4px;
cursor: pointer;
background-color:steelblue;
color:white;
`

const experience =  new Date().getFullYear() - 2014;
const bio = `I have over ${experience} years experience as software engineer, and I have worked
             for both small startups and large organizations. While I'm proficient Senior Full-stack developer,
             my expertise is in building scalable backend services (API services, stream processing, and async mechanisms), 
             frontend applications (web-apps, web portal) and a Strong TDD Advocate `;
const skills = ['Javascript','Node JS','Express JS','ReactJS','Angular','PHP','Laravel','Redis','RabbitMQ','REST','GraphQL','Apollo graphQL','Elasticsearch','MySql','PostgreSQL'];
const items = skills.map((skill,index) => <Span key={index}>{skill}</Span>)
const langages = [
    {
        id:1,
        name:'English',
        level:'Fluent'

    },
    {
        id:2,
        name:'French',
        level:'Fluent'
    } 
]
const langue = langages.map((item) => <Span key={item.id}>{item.name} - <span>{item.level}</span></Span>)
const Welcome = () => {
    return (
        <div>
            <Wframe>
                <Whead>👋 Hello, I'm Komla Sodji </Whead>
                {/* <Wframe><Wimg src={welcm}></Wimg>  </Wframe> */}
                    
                <Wnote>{bio}</Wnote>
            </Wframe>
            <hr></hr>
            <Wframe>
                <Wnote>{items}</Wnote>
            </Wframe>
            <Wframe>
                <Wnote>{langue}</Wnote>
            </Wframe>
            
        </div>

    )
}

export default Welcome
// <Wnote>{items}</Wnote>