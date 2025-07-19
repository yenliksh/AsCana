import React, { useState } from "react";
import { TextInput, Alert, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Button, ButtonText } from "components/ui";
import { login } from "api/auth";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../contexts/authContexts";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { login: loginApp } = useAuth();

  const handleLogin = async () => {
    try {
      console.log("start");
      const res = await login(email, password);
      console.log("next");
      console.log("res", res);

      if (res.access_token) {
        await loginApp(res.access_token); // Save token
        navigation.navigate("Home"); // Navigate to Home screen
      } else {
        Alert.alert("Login Failed", res.message || "Unknown error");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        Alert.alert("Error", err.message);
      } else {
        Alert.alert("Error", "Something went wrong");
      }
    }
  };

  const handleRegisterNavigation = () => {
    navigation.navigate("Register"); // Make sure this route exists in your navigator
  };

  return (
    <Wrapper>
      <Container>
        <Title>Welcome Back 👋</Title>
        <Subtitle>Log in to continue your wellness journey</Subtitle>

        <Input
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button onPress={handleLogin} disabled={loading}>
          <ButtonText>{loading ? "Logging In..." : "Log In"}</ButtonText>
        </Button>

        <RegisterPrompt onPress={handleRegisterNavigation}>
          <PromptText>
            Don’t have an account? <RegisterLink>Register</RegisterLink>
          </PromptText>
        </RegisterPrompt>
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
const RegisterPrompt = styled(TouchableOpacity)`
  margin-top: 16px;
  align-self: center;
`;

const PromptText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const RegisterLink = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;
