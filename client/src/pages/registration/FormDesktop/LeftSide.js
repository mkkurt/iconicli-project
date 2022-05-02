import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import logo from "images/regLogo1.png";

function LeftSide() {
  const navigate = useNavigate();

  return (
    <LeftContainer>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} alt="Logo" onClick={() => navigate("/")} />
        </LogoWrapper>
        <HeaderWrapper>
          <Header>Become a model now!</Header>
        </HeaderWrapper>
        <ContentWrapper>
          <Content>
            It has never been this easy. As a model, you create a beautiful
            portfolio with photos, reels and voice recordings.{" "}
          </Content>
        </ContentWrapper>
      </Wrapper>
    </LeftContainer>
  );
}

const LeftContainer = styled.div`
  width: 30vw;
  background: #8c52ff;
  height: 100vh;
  padding: 0px 46px;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
`;

const LogoWrapper = styled.div`
  display: flex;
  padding: 2rem 0;
`;

const Logo = styled.img`
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  margin-top: 4rem;
`;

const Header = styled.div`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  margin-top: 6rem;
`;

const Content = styled.div`
  font-family: "Poppins";
  font-weight: regular;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

export default LeftSide;
