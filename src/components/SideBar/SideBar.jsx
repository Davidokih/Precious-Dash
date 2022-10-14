import React from 'react'
import styled from 'styled-components'
// import {VscHome} from 'react-icons/vs'

const SideBar = () => {
  return (
      <Container>
          <Wrapper>
              <Header>
                  <Logo>Icon</Logo>
                  <Title>E-Skool</Title>
              </Header>
              <NavHold>
                  <Nav><Icon>Icon</Icon>Home</Nav>
                  <Nav><Icon>Icon</Icon>My Results</Nav>
                  <Nav><Icon>Icon</Icon>Submissions</Nav>
                  <Nav><Icon>Icon</Icon>Tutorials</Nav>
                  <Nav><Icon>Icon</Icon>PTA Meetings</Nav>
                  <Nav><Icon>Icon</Icon>Settings</Nav>
              </NavHold>
          </Wrapper>
    </Container>
  )
}

export default SideBar

const Icon = styled.div`
    margin-right: 20px;

`;
const Nav = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    cursor: pointer;
`
const NavHold = styled.div`
    line-height: 3.4;
`

const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Logo = styled.div`
    width: 70px;
    height: 45px;
    background-color: orange;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Header = styled.div`
    width: 200px;
    height: 45px;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin-bottom: 30px;
`
const Wrapper = styled.div`
    width: 70%;
    height: 550px;
    color: white;
    font-weight: 600;
    /* background-color: gray; */
`
const Container = styled.div`
    width: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
`