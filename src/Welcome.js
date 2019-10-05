import React from 'react'
import styled from 'styled-components'
import welcm from './img/welcm.svg'

const Wframe = styled.div`
    text-align:center
    transition: 0.3s;
    padding: 5px 5px 5px 5px;
`
const Wnote = styled.p`

`

const Wimg = styled.img`
    padding-top:5px;
`
const Whead = styled.h1`
    font-size:28px;
    
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
            <Whead> I'm a full web stack developer </Whead>
            {/* <Wframe><Wimg src={welcm}></Wimg>  </Wframe> */}
                  
            <Wnote>I'm a web designer / developer based in Toronto, Canada. I have a passion for web design and love to create for web and mobile devices</Wnote>
        </Wframe>
    )
}

export default Welcome