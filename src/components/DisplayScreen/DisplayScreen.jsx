import React from 'react'
import SideBar from '../SideBar/SideBar'
import styled from 'styled-components'
import Body from "../Body/Body"
import ProfileBar from '../SideBar/ProfileBar'

const DisplayScreen = () => {
  return (
      <Container>
          <Wrapper>
              <First>
                <SideBar />
              </First>
              <Second>
                  <Body />
              </Second>
              <Third>
                  <ProfileBar />
              </Third>
          </Wrapper>
    </Container>
  )
}

export default DisplayScreen

const Third = styled.div`
    width: 270px;
    /* height: 100vh; */
    /* background-color: gray; */

    @media (max-width: 1000px){
        display: none;
    }
`;
const Second = styled.div`
    width: 750px;
    /* background-color: gray; */
    margin-left: 270px;

    @media (max-width: 1200px){
        margin-left: 0px;
    }
    @media (max-width: 768px){
        width: 100%;
    }
`;
const First = styled.div`
    width: 290px;
    background-color: blue;
    height: 100vh;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0px;
    /* justify-content: center; */

    @media (max-width: 1200px){
        display: none;
    }
    `;
const Wrapper = styled.div`
    width: 98%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 70px);


    display: flex;
    align-items: center;
    justify-content: center;
`;