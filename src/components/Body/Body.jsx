import React, { useState } from 'react'
import styled from 'styled-components'
import pix from "../gradely_girl.png"
import pic from "../images/practice.svg"
import MenuHold from '../SideBar/MenuHold'
import { FaBars } from 'react-icons/fa'
import SideBar from '../SideBar/SideBar'

const Body = () => {

    const [open, setOpen] = useState(false)
  return (
      <>
          <Container>
          <Wrapper>
              <HoldMenu>
                  <Menu>
                        <FaBars onClick={ () => {
                              document.getElementById("menu").style.left = "0px"
                      }}/>
                  </Menu>
              <SearchHold>
                  <Input placeholder="What do you want to learn?" />
                  <Icon>Icon</Icon>
                  </SearchHold>
                  <Head>
                  <Icon1>Icon</Icon1>
                      {open ? <Profile src={ pix } onClick={ () => {
                          setOpen(false);
                      } }/> : <Profile src={ pix } onClick={ () => {
                        setOpen(true);
                    } }/>}
                  </Head>
                  {
                      open ? (<Span onClick={ () => {
                        setOpen(false);
                    } }>
                          <MenuHold />
                      </Span>) : null
                  }
              </HoldMenu>
              <ProfileHold>
                  <Content>  
                      <Title>Your Profile</Title>
                      <Text>manifest.json provides metadata used when your web app is installed on a</Text>
                      <Button>Set Goals</Button>
                  </Content>
                  <Image src={ pix} />
              </ProfileHold>

              <AssetHold>
                  <Hold>
                      <Div>Your Assignments</Div>
                      <View>
                          View More
                      </View>
                  </Hold>
                  <CardHold>
                      <Card>
                          <Subject>Mathematics lll</Subject>
                          <Topic>Calculus</Topic>
                          <Course src={pic } />
                          <Process>
                              <Line></Line>
                              <Line2></Line2>
                          </Process>
                      </Card>
                      <Card>
                          <Subject>Mathematics lll</Subject>
                          <Topic>Calculus</Topic>
                          <Course src={pic } />
                          <Process>
                              <Line></Line>
                              <Line2></Line2>
                          </Process>
                      </Card>
                      <Card>
                          <Subject>Mathematics lll</Subject>
                          <Topic>Calculus</Topic>
                          <Course src={pic } />
                          <Process>
                              <Line></Line>
                              <Line2></Line2>
                          </Process>
                      </Card>
                  </CardHold>

              </AssetHold>
              <AssetHold>
                  <Hold>
                      <Div>Lessons For You</Div>
                      <View>
                          View More
                      </View>
                  </Hold>
                  <CardHold>
                      <Card2>
                          <Hold2>
                          <Subject2>Mathematics lll</Subject2>
                          <Topic2>Calculus</Topic2>
                          </Hold2>
                          <Course src={pic } />
                      </Card2>
                      <Card2>
                          <Hold2>
                          <Subject2>Mathematics lll</Subject2>
                          <Topic2>Calculus</Topic2>
                          </Hold2>
                          <Course src={pic } />
                      </Card2>
                  </CardHold>

              </AssetHold>
          </Wrapper>
          </Container>
          <Slider id="menu" onClick={ () => {
              document.getElementById("menu").style.left = "-300px"
          }}>
              <SideBar />
          </Slider>
      </>
  )
}

export default Body

const Slider = styled.div`
   
   display: none;
    /* display: none; */
    /* justify-content: center; */
    /* z-index: 111; */

    @media (max-width: 1200px){
        display: flex;
    align-items: center;
    width: 290px;
    background-color: blue;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: -300px;
    transition: all .7s;
    }
`
const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gold;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

`
const Span = styled.div`
    background-color: white;
    width: 300px;
    position: absolute;
    top: 50px;
    right: 30px;
    border: 1px solid gray;
    border-radius: 10px;
`;
const Menu = styled.div`
    display: none;
    cursor: pointer;

    @media (max-width: 1200px){
        display: block;
    }
`;
const HoldMenu = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;
const Icon1 = styled.div``
const Head = styled.div`
height: 70px;
  width: 200px;
  display: none;
  

  @media (max-width: 1000px){
    display: flex;
  align-items: center;
  justify-content: space-between;
    }
`
const Topic2 = styled.div`
    font-weight: 400;
    color: white;
    margin-bottom: 10px;
`
const Subject2 = styled.div`
    font-weight: 600;
    font-size: 17px;
    color: white;
`
const Hold2 = styled.div`

    margin: 15px 0px;
`
const Card2 = styled.div`
    width: 250px;
    background-color: #ea8585;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    /* flex-direction: column; */
    margin: 10px;
`;
const Course = styled.img`
    margin-bottom: 10px;
`;
const Line2 = styled.div`
width: 100px;
    background-color: #b6b6b6;
    height: 4px;
`;
const Line = styled.div`
    width: 50px;
    background-color: blue;
    height: 4px;
`;
const Process = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
const Topic = styled.div`
    font-weight: 500;
    color: gray;
    margin-bottom: 10px;
`
const Subject = styled.div`
    font-weight: 600;
    font-size: 17px;
    color: #464685;
`
const Card = styled.div`
    width: 200px;
    background-color: #e3e3e3;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    flex-direction: column;
    margin: 10px;
`  
const CardHold = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`  
const View = styled.div`
     font-size: 12px;
    font-weight: 500;
    color: blue;
`
const Div = styled.div`
     font-size: 25px;
    font-weight: 700;
    color: #464685;
`
const Hold = styled.div`
    width: 90%;
    height: 40px;
    border-bottom:1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;
const AssetHold = styled.div`
    width: 95%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
`
const Image = styled.img`
    width: 200px;
    height: 200px;
    /* background-color: lightgray; */
    margin-bottom: 20px;
`
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
const Text = styled.div`
    margin-bottom: 20px;
    font-weight: 500;
    color: gray;
    /* word-wrap: break-word; */

    @media (max-width: 768px){
    text-align: center;

    }
`;
const Title = styled.div`
    font-size: 25px;
    font-weight: 700;
    color: #464685;
    margin-bottom: 20px;
`;
const Content = styled.div`
    width: 350px;
    margin-right: 30px;

    @media (max-width: 768px){
        margin: 0px;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    /* background-color: gray; */

    }
`
const ProfileHold = styled.div`
    width: 100%;
    border: 1px solid lightgray;

    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;

    @media (max-width: 768px){
        flex-direction: column-reverse;
        width: 70%;
    }
`
const Input = styled.input`
    border: 0px;
    outline: none;
    background-color: transparent;
    width: 200px;
`
const Icon = styled.div``
const SearchHold = styled.div`
    background-color: #acfff2;
    width: 250px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    border-radius: 10px;
    margin: 25px 0px  20px 20px;

    @media (max-width: 500px){
        display: none;
    }
`
const Wrapper = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: gray; */
`;
const Container = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`