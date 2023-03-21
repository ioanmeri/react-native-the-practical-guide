import { Text, StyleSheet, View } from "react-native";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponents Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
