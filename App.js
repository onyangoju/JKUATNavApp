import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import routes from './data/routes.json'; // ✅ FIXED PATH

export default function App() {
  const handleRouteSelect = (key) => {
    alert(`You selected ${routes[key].name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Route</Text>
      {Object.keys(routes).map((key) => (
        <Button
          key={key}
          title={`Navigate to ${routes[key].name}`}
          onPress={() => handleRouteSelect(key)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
