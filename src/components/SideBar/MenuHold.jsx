import React from 'react'
import styled from 'styled-components'

const MenuHold = () => {
  return (
      <div>
           <Hold>
        <SubHead>Your Tasks Today</SubHead>
              <Line></Line>
              <NavHold>
                  <Nav><Icon></Icon>Upload Assignment</Nav>
                  <Nav><Icon></Icon>Study for Quiz</Nav>
                  <Nav><Icon></Icon>Paragraph Corrections</Nav>
                  <Nav><Icon></Icon>Spell Chheck English</Nav>
              </NavHold>
              <Button>+ Create New</Button>
              </Hold>
    </div>
  )
}

export default MenuHold;

const Hold = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  

`;
const Button = styled.button`
    border: 0px;
    outline: none;

    background-color: orange;
    padding: 10px 30px;
    border-radius: 20px;
    color: white;
    font-weight: 600;
    margin-bottom: 10px;
`;
const Icon = styled.div`
    margin-right: 10px;
    margin-left: 10px;

    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: gold;

`;
const Nav = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    /* background-color: gray; */

    :active{
      background-color: lightgray;
      border-left: 4px solid blue;
    }
`
const NavHold = styled.div`
    line-height: 2.4;
    width: 100%;
    margin-bottom: 10px;
    /* border-top: 1px solid lightgray; */
`
const Line = styled.div`
  background-color: lightgray;
  width: 100%;
  height: 2px;
  margin-bottom: 20px;
`
const SubHead = styled.div`
  font-size: 20px;
    font-weight: 700;
    color: #464685;
    margin-bottom: 10px;

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`