import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function ScannerScreen() {
  const [data, setData] = useState<string | null>(null);

  const fakeBarcode = "1234567890ABC"; // <- захардкоженный штрихкод

  const handleFakeScan = () => {
    setData(fakeBarcode);
    alert(`Сканировано (тест): ${fakeBarcode}`);
  };

  return (
    <View style={styles.container}>
      <Button title="Симулировать сканирование" onPress={handleFakeScan} />
      {data && <Text style={styles.resultText}>Результат: {data}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
  },
});
