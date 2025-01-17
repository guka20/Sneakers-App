import { View, Text, Image, StyleSheet } from "react-native";
import sneaker from "../../assets/sneaker.jpg";
const ImageSlider = () => {
  return (
    <View style={styles.container}>
      <Image source={sneaker} style={styles.image} />
    </View>
  );
};
export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    height: "100%",
  },
});
