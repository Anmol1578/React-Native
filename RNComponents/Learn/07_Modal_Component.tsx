import { View, Button, Text, Modal } from "react-native";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
        padding: 50,
      }}
    >
      <Button
        title="Press"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
        disabled={false}
      />

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "blueviolet",
            padding: 50,
          }}
        >
          <Text>Modal Content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => setIsModalVisible(false)}
            disabled={false}
          />
        </View>
      </Modal>
    </View>
  );
}
