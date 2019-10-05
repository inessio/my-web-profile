import React ,{ Component } from 'react'
import styled from 'styled-components'
import Welcome from './Welcome'

const PageContent = styled.div`
    margin-left: 400px;
    padding: 30px 16px 0 0;
    height: 1000px;
    @media screen and (max-width: 700px) {
        width:100%;
        padding: 100px 0 0 10px;
      };
`
const Greeting = styled.h2`
    font-family: 'Livvic', sans-serif;
    color:black;
    size:12px;
    font-weight: bold;
`
class Content extends Component {
    render(){
        return (
            <PageContent>
                <Welcome></Welcome>
                   {/* <Greeting>lorem ip siofewrf reunfuier jasbiusd bsudbuis hsiucbui </Greeting> */}
            </PageContent>
        )
    }
}

export default Content