import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Button, ButtonText } from "components/ui";

const LoginScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Welcome Back 👋</Title>
        <Subtitle>Log in to continue your wellness journey</Subtitle>

        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />

        <Button>
          <ButtonText>Log In</ButtonText>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default LoginScreen;

const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  padding: 24px;
`;

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 32px 24px;
  border-radius: ${({ theme }) => theme.borderRadius.l}px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  elevation: 3;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 24px;
`;

const Input = styled(TextInput)`
  height: 52px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.borderRadius.m}px;
  background-color: #ffffff;
  border: 1px solid #eee;
  margin-bottom: 16px;
`;
