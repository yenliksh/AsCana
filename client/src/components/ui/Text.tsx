import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.muted};
`;

export const Body = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};
`;
