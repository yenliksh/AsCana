import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ScanScreen = () => {
  const navigation = useNavigation();

  const handleScan = () => {
    // Mock scan result (you can replace with real barcode scanner later)
    const barcode = "1234567890123";
    navigation.navigate("ProductDetails", { barcode });
  };

  return (
    <Container>
      <Title>Scan Product</Title>
      <ScanButton onPress={handleScan}>
        <ButtonText>📷 Scan</ButtonText>
      </ScanButton>
    </Container>
  );
};

export default ScanScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large}px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const ScanButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.m}px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`;
