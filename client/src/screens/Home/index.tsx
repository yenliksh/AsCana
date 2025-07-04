import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";

const HomeScreen = () => {
  return (
    <Container>
      <TopRow>
        <Greeting>Hi, Alex 👋</Greeting>
        {/* Optional avatar/profile icon here */}
      </TopRow>

      <Subtext>Welcome back! Ready to scan something healthy today?</Subtext>

      <HeroImage source={require("../../../assets/scan-illustration.png")} />

      <ScanButton>
        <ScanText>📷 Scan a Product</ScanText>
      </ScanButton>

      <StatsCard>
        <StatText>🥗 Your average health score:</StatText>
        <Score>82 / 100</Score>
        <ScoreLabel>Excellent</ScoreLabel>
      </StatsCard>
    </Container>
  );
};

export default HomeScreen;
const Container = styled.View`
  flex: 1;
  padding: 28px 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const Greeting = styled.Text`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Subtext = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
  line-height: 24px;
`;

const HeroImage = styled.Image`
  width: 100%;
  height: 220px;
  resize-mode: contain;
  margin-bottom: 40px;
`;

const ScanButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 30px;
`;

const ScanText = styled.Text`
  font-size: 17px;
  color: white;
  font-weight: 600;
`;

const StatsCard = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  padding: 22px;
  border-radius: 24px;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 8px;
  elevation: 3;
`;

const StatText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 6px;
`;

const Score = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const ScoreLabel = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.success};
  font-weight: 500;
`;
