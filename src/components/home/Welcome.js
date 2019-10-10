import React from 'react'
import styled from 'styled-components'
import welcm from '../../img/welcm.svg'

const Wframe = styled.div`
    text-align:center;
    transition: 0.3s;
    padding: 30px 5px 5px 5px;
`
const Wnote = styled.p`
    font-size:20px;
    text-align:center;
`

const Wimg = styled.img`
    padding-top:5px;
`
const Whead = styled.h1`
    font-size:55px;
    
`
// const started = "2014";
// var today = new Date;
// var tdYear = today.getFullYear()
// const experienceYear = (started,tdYear) =>{
//    return tdYear - started
// }

const Welcome = () => {
    return (
        <Wframe>
            <Whead>Hi there, </Whead>
            <Whead>I'm Komla Sodji </Whead>
            {/* <Wframe><Wimg src={welcm}></Wimg>  </Wframe> */}
                  
            <Wnote>Full-stack software engineer with over 5 years experience in NodeJS, ReactJs, ExpressJs</Wnote>
        </Wframe>
    )
}

export default Welcome