import React from "react";
import styled from "styled-components";

import logo from "images/logo3.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <Container id="contact">
      <Left>
        <RoboBold>Contact</RoboBold>
        <RoboRegular>info@iconicli.com</RoboRegular>
        <Socials>
          <FaFacebookF size={20} />
          <FaInstagram size={20} style={{ marginLeft: "10px" }} />
          <FaTwitter size={20} style={{ marginLeft: "10px" }} />
          <FaPinterestP size={20} style={{ marginLeft: "10px" }} />
          <FaTiktok size={20} style={{ marginLeft: "10px" }} />
          <FaWhatsapp size={20} style={{ marginLeft: "10px" }} />
          <FaYoutube size={20} style={{ marginLeft: "10px" }} />
        </Socials>
        <Terms>Terms & conditions</Terms>
      </Left>
      <Center>
        <img src={logo} alt="logo" />
        <Trademark>© 2022 ICONICLI AKTIEBOLAG</Trademark>
      </Center>
      <Right>
        <RoboBold>Adress</RoboBold>
        <RoboRegular>Sågargatan 10B, 75318 Uppsala, Sweden</RoboRegular>
      </Right>
      <MobileBottom>
        <RoboRegular>Contact</RoboRegular>
        <br />
        <RoboRegular>info@iconicli.com</RoboRegular>
        <br />
        <RoboRegular>+46(0)761631995</RoboRegular>
        <br />
        <RoboRegular>Sågargatan 10B, 75318 Uppsala, Sweden</RoboRegular>
      </MobileBottom>
      <MobilTrademark style={{ marginTop: "3rem" }}>
        © 2022 ICONICLI limited company
      </MobilTrademark>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1f0045;
  margin-top: 170px;

  @media (max-width: 1224px) {
    flex-direction: column;
    margin-top: 0px;
    padding: 0 0 2rem 0;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1f0045;
  color: white;

  @media (max-width: 1224px) {
    display: none;
  }
`;
const Roboto = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  color: #ffffff;
`;
const RoboRegular = styled(Roboto)`
  font-weight: regular;
`;

const Trademark = styled(RoboRegular)`
  @media (max-width: 1224px) {
    display: none;
  }
`;

const MobilTrademark = styled(RoboRegular)`
  display: none;
  @media (max-width: 1224px) {
    display: block;
  }
`;
const RoboBold = styled(Roboto)`
  font-weight: bold;
`;
const Socials = styled.div`
  margin-top: 26px;
`;
const Terms = styled(RoboRegular)`
  font-size: 12px;
  margin-top: 50px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;

  @media (max-width: 1224px) {
    display: none;
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 10rem;
  margin: 30px 0;

  @media (max-width: 1224px) {
    margin: 0;
  }
`;

const MobileBottom = styled.div`
  display: none;

  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    padding: 20px;
    width: 80%;
  }
`;

export default Footer;
