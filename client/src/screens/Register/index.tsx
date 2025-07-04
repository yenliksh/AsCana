import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { Button, ButtonText } from "components/ui";

const RegisterScreen = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Create Account ✨</Title>
        <Subtitle>Join us and start scanning healthy today</Subtitle>

        <Input placeholder="Full Name" />
        <Input placeholder="Email" keyboardType="email-address" />
        <Input placeholder="Password" secureTextEntry />
        <Input placeholder="Confirm Password" secureTextEntry />

        <Button>
          <ButtonText>Register</ButtonText>
        </Button>
      </Container>
    </Wrapper>
  );
};

export default RegisterScreen;

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
