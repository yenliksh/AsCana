import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.m}px;
  border-radius: ${({ theme }) => theme.borderRadius.m}px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.medium}px;
`;
