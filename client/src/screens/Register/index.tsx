import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Button, ButtonText } from "components/ui";
import { register } from "api/auth";
import { useAuth } from "../../../contexts/authContexts";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const { login } = useAuth();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await register({
        fullName: name,
        email,
        password,
        role: "user",
      });
      console.log("response", response, response.access_token);
      await login(response.access_token);
    } catch (err: any) {
      console.error("Registration failed:", err.message || err);
    }
  };

  return (
    <Wrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Title>Create Account ✨</Title>
            <Subtitle>Join us and start scanning healthy today</Subtitle>

            <Input
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <Input
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />

            <Button onPress={handleRegister}>
              <ButtonText>Register</ButtonText>
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default RegisterScreen;

// ------------------- Styles -------------------

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
