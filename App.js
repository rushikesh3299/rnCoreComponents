import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  ScrollView,
  Pressable,
  Modal,
  ActivityIndicator,
  Alert,
} from "react-native";
import Greet from "./components/Greet";

const logoImg = require("./assets/adaptive-icon.png");

const App = () => {
  const [isModelVisible, setIsModelVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "lightyellow", padding: 60 }}>
      <ScrollView>
        {/* Image with nativ source & url source */}
        <Image
          source={logoImg}
          style={{ height: 200, width: 200, margin: 10 }}
        ></Image>
        {/* pressable image can be used as btn */}
        <Pressable onPress={() => console.log("img btn pressed")}>
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ height: 200, width: 200, marginTop: 10, marginLeft: 60 }}
          ></Image>
        </Pressable>
        {/* Image as a backgroung */}
        <ImageBackground source={logoImg} style={{ flex: 1 }}>
          <Text style={{ fontSize: 36 }}>
            <Text style={{ color: "white" }}>Hello</Text> World
          </Text>
        </ImageBackground>
        {/* Button */}
        <Button
          title="Press Btn"
          onPress={() => console.log("btn pressed")}
          color="midnightblue"
          // disabled
        />
        {/* Modal */}
        <Button title="Open Model" onPress={() => setIsModelVisible(true)} />
        <Modal
          visible={isModelVisible}
          onRequestClose={() => setIsModelVisible(false)}
          animationType="slide"
        >
          <View style={{ flex: 1, backgroundColor: "lightgray", padding: 40 }}>
            <Text>Model Text Content</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setIsModelVisible(false)}
            />
          </View>
        </Modal>
        {/* ActivityIndicator/Loader => animating=true for showing */}
        <ActivityIndicator size="large" color="red" animating={true} />
        {/* Alert Component */}
        <Button
          title="Open Alert1"
          onPress={() => Alert.alert("Alert Title", "Alert Data is here")}
        />
        <Button
          title="Open Alert2"
          onPress={() =>
            Alert.alert("Alert Title", "Alert Data is here", [
              { text: "Cancel", onPress: () => console.log("Cancel pressed") },
              { text: "Ok", onPress: () => console.log("Ok pressed") },
            ])
          }
        />
        <Greet name="Bruce" />
      </ScrollView>
    </View>
  );
};

export default App;
