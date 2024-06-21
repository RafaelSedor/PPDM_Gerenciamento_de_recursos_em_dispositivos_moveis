import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockData = Array.from({ length: 50 }, (_, index) => ({
  id: `${index}`,
  item: `Item ${index + 1}`,
}));

const ShoppingListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ShoppingListScreen;
