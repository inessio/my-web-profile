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
    font-size:22px;
    text-align:center;
`

const Wimg = styled.img`
    padding-top:5px;
`
const Whead = styled.h1`
    font-size:40px;
    padding: 20px 20px 20px 20px;
    
    
`
const Tittle = styled.h1`
    font-size:25px;
    font-color:red;
`
const Skilldiv = styled.div`
   
`
const Span = styled.button`
    padding:12px 12px;
    margin: 10px;
    border-radius:32px;
    display:inline-block;
    font-size:20px;
    text-align: center;
    margin-bottom: 4px;
    margin-right: 4px;
    cursor: pointer;
    background-color:steelblue;
    color:white;
    padding: 10px 20px 10px 20px;
`

const experience =  new Date().getFullYear() - 2014;

const bio = `I'm a Full-stack Software Engineer with industry experience (over ${experience} years), building websites, RESTful API, and so on. Using Javascript, Node js , React and PHP at daily work.
             Usually, using Angular, Docker for personal projects.Strong TDD Advocate, sometimes maintaning services on Linux based servers.\n\n\n
             I also have enthousiasm for problem solving and digging new techs.`;
const bio2 = ` `;             

const skills = [
                'Javascript',
                'Node JS',
                'Express JS',
                'ReactJS',
                'Angular',
                'PHP',
                'Laravel',
                'Redis',
                'RabbitMQ',
                'MongoDB',
                'GraphQL',
                'Apollo graphQL',
                'Elasticsearch',
                'MySql',
                'PostgreSQL',
                'Docker'
            ];

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
];
const personalSkills = ['Problem Solving','Innovative','Team Player'];
const personal = personalSkills.map((item,index) => <Span key={index}>{item}</Span>)
const langue = langages.map((item) => <Span key={item.id}>{item.name} - <span>{item.level}</span></Span>)
const Welcome = () => {
    return (
        <div>
            <Wframe>
                <Whead>👋 Hello, I'm Komla Sodji </Whead>
                {/* <Wframe><Wimg src={welcm}></Wimg>  </Wframe> */}
                    
                <Wnote>{bio}</Wnote>
            </Wframe>
            <Wframe>
                <Tittle>Technicals Skills</Tittle>
                <Wnote>{items}</Wnote>
            </Wframe>
            <Wframe>
                <Tittle>Communication Skills</Tittle>
                <Wnote>{langue}</Wnote>
            </Wframe>
            <Wframe>
                <Tittle>Personal Skills</Tittle>
                {/* <Wnote>{personal}</Wnote> */}
            </Wframe>
            <br></br>
            <br></br>
            <br></br>
            <Wframe>
                <Wnote>Email: duhamelgking@gmail.com</Wnote>
                <Wnote>Phone: +233556304507</Wnote>
            </Wframe>
            
        </div>

    )
}

export default Welcome