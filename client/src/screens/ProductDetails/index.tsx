import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { useRoute } from "@react-navigation/native";
import { fetchByBarcode } from "api/scannedProducts";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailsScreen = () => {
  const { params } = useRoute();
  const barcode = params?.barcode;
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProduct({
      name: "Product",
      healthLabel: "healthLabel",
      healthScore: 90,
      risks: ["too much sugar"],
      benefits: ["many vegetables"],
    });
    setLoading(false);
    const fetchProduct = async () => {
      try {
        const res = await fetchByBarcode(barcode);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Ошибка при загрузке продукта:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [barcode]);

  if (loading) {
    return (
      <Centered>
        <ActivityIndicator size="large" />
      </Centered>
    );
  }

  if (!product) {
    return (
      <Centered>
        <ErrorText>Продукт не найден.</ErrorText>
      </Centered>
    );
  }

  return (
    <Container>
      <Title>{product.name}</Title>
      <Label>{product.healthLabel}</Label>

      <Card>
        <StatTitle>🥗 Health Score</StatTitle>
        <StatValue>{product.healthScore} / 100</StatValue>
      </Card>

      {product.risks && (
        <Card>
          <SectionTitle>⚠️ Риски</SectionTitle>
          <List>
            {product.risks.map((risk: string, index: number) => (
              <ListItem key={index}>• {risk}</ListItem>
            ))}
          </List>
        </Card>
      )}

      {product.benefits && (
        <Card>
          <SectionTitle>✅ Полезные свойства</SectionTitle>
          <List>
            {product.benefits.map((benefit: string, index: number) => (
              <ListItem key={index}>• {benefit}</ListItem>
            ))}
          </List>
        </Card>
      )}
    </Container>
  );
};

export default ProductDetailsScreen;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const Label = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 20px;
`;

const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
`;

const StatTitle = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 4px;
`;

const StatValue = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`;

const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const List = styled.View``;

const ListItem = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 6px;
`;

const Centered = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;
