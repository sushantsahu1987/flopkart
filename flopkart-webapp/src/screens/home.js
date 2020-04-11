import React from "react";
import { withRouter } from "react-router";
import { Container, Screen, PrimaryButton,FaceImage } from "../components/";
import Face from "../assets/face.jpeg";

const HomeScreen = (props) => {
  const onLoginPress = () => {
    console.log(props);
    props.history.push("/login");
  };

  return (
    <Container>
      <Screen>
        <FaceImage src={Face}/>
        <PrimaryButton onClick={onLoginPress}>Login</PrimaryButton>
      </Screen>
    </Container>
  );
};

export const Home = withRouter(HomeScreen);
