import React from "react";
import { Container, Screen, PrimaryButton } from "../components/";
import { withRouter } from "react-router";

const LoginScreen = (props) => {
  const onGotoCartPress = () => {
    props.history.push("/cart");
  };

  return (
    <Container>
      <Screen>
        <PrimaryButton onClick={onGotoCartPress}>Go To Cart</PrimaryButton>
      </Screen>
    </Container>
  );
};

export const Login = withRouter(LoginScreen);
