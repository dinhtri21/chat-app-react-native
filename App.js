import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { UserContext } from "./UserContext";
import { EXPRESS_API_URL } from "@env";

export default function App() {
  console.log("ds"+EXPRESS_API_URL);
  return (
    <>
      <UserContext>
        <StackNavigator />
      </UserContext>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
