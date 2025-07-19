import React, { useState } from "react";
import styled from "styled-components/native";
import { ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileScreen = () => {
  const [name, setName] = useState("Айдана");
  const [email, setEmail] = useState("aidana@example.com");
  const [goal, setGoal] = useState("Похудение");
  const [dietType, setDietType] = useState("halal");
  const [allergens, setAllergens] = useState("лактоза, арахис");
  const [avoidIngredients, setAvoidIngredients] = useState("сахар, E621");

  const handleSave = () => {
    // В реальном приложении: отправка данных на сервер
    Alert.alert("Профиль сохранён", "Ваши настройки успешно обновлены!");
  };

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Title>Профиль пользователя</Title>

        <Label>Имя</Label>
        <Input value={name} onChangeText={setName} placeholder="Введите имя" />

        <Label>Email</Label>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Введите email"
        />

        <Label>Цель питания</Label>
        <Input
          value={goal}
          onChangeText={setGoal}
          placeholder="Например: Похудение"
        />

        <Label>Диета</Label>
        <Picker>
          <PickerOption
            selected={dietType === "omnivore"}
            onPress={() => setDietType("omnivore")}
          >
            <PickerText selected={dietType === "omnivore"}>Всеядная</PickerText>
          </PickerOption>

          <PickerOption
            selected={dietType === "vegetarian"}
            onPress={() => setDietType("vegetarian")}
          >
            <PickerText selected={dietType === "vegetarian"}>
              Вегетарианская
            </PickerText>
          </PickerOption>

          <PickerOption
            selected={dietType === "vegan"}
            onPress={() => setDietType("vegan")}
          >
            <PickerText selected={dietType === "vegan"}>Веганская</PickerText>
          </PickerOption>

          <PickerOption
            selected={dietType === "halal"}
            onPress={() => setDietType("halal")}
          >
            <PickerText selected={dietType === "halal"}>Халал</PickerText>
          </PickerOption>
        </Picker>

        <Label>Аллергии</Label>
        <Input
          value={allergens}
          onChangeText={setAllergens}
          placeholder="Через запятую"
        />

        <Label>Избегать ингредиенты</Label>
        <Input
          value={avoidIngredients}
          onChangeText={setAvoidIngredients}
          placeholder="Например: сахар, пальмовое масло"
        />

        <SaveButton onPress={handleSave}>
          <SaveText>Сохранить</SaveText>
        </SaveButton>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen;

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const Label = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 16px;
  margin-bottom: 6px;
`;

const Input = styled.TextInput`
  padding: 14px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.colors.card};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`;

const Picker = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const PickerOption = styled.TouchableOpacity<{ selected: boolean }>`
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.card};
  padding: 10px 14px;
  border-radius: 20px;
`;

const PickerText = styled.Text<{ selected: boolean }>`
  color: ${({ selected, theme }) => (selected ? "white" : theme.colors.text)};
  font-size: 15px;
  font-weight: 500;
`;

const SaveButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 16px;
  border-radius: 20px;
  align-items: center;
  margin-top: 30px;
`;

const SaveText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: 600;
`;
