import React from "react";
import styled from "styled-components/native";
import { Title, Body } from "../ui/Text";

const Card = styled.View`
  background: white;
  padding: 16px;
  border-radius: 12px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 4;
`;

export default function ProductCard({ name, brand }) {
  return (
    <Card>
      <Title>{name}</Title>
      <Body>{brand}</Body>
    </Card>
  );
}
