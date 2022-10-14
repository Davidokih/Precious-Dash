import React from 'react'
import styled from 'styled-components'
import pix from "../gradely_girl.png"
import MenuHold from './MenuHold'

const ProfileBar = () => {
  return (
      <Container>
          <Wrapper>
              <Head>
                  <Icon1>Icon</Icon1>
          <Profile src={ pix} />
              </Head>
        <div>
          <MenuHold />
       </div>
          </Wrapper>
    </Container>
  )
}

export default ProfileBar


const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gold;

  display: flex;
  align-items: center;
  justify-content: center;

`
const Icon1 = styled.div``
const Head = styled.div`
height: 70px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`