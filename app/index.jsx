import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import ImageSlider from "../components/Slider/Slider";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
const MainPage = () => {
  const [counter, setCounter] = useState(0);
  const handleDecreaseProductPress = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <View style={styles.pageStyle}>
      <ImageSlider />
      <View style={styles.container}>
        <Text style={styles.pageTitle}>sneaker company</Text>
        <Text style={styles.productTitle}>Fall limited edition sneakers</Text>
        <Text style={styles.productDescription}>
          These low-profile sneakers are you perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </Text>
        <View style={styles.pricesPlace}>
          <View style={styles.currentPriceAndPercentage}>
            <Text style={styles.currentPrice}>$125.00</Text>
            <Text style={styles.percentage}>50%</Text>
          </View>
          <Text style={styles.oldPrice}>$250.00</Text>
        </View>
        <View style={styles.counterBtns}>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={handleDecreaseProductPress}
          >
            <Text style={styles.counterBtnText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterNumber}>{counter}</Text>
          <TouchableOpacity
            style={styles.counterBtn}
            onPress={() => setCounter(counter + 1)}
          >
            <Text style={styles.counterBtnText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addToCart}>
          <AntDesign name="shoppingcart" style={styles.addToCartContent} />
          <Text style={styles.addToCartContent}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    width: "85%",
  },
  pageTitle: {
    marginTop: 15,
    fontSize: 15,
    color: "#8a8888",
    textTransform: "uppercase",
  },
  productTitle: {
    fontSize: 23,
    color: "black",
    fontWeight: "bold",
    letterSpacing: 2,
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 15,
    lineHeight: 25,
    color: "#8a8888",
  },
  pricesPlace: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  currentPriceAndPercentage: {
    alignItems: "center",
    flexDirection: "row",
    gap: 20,
  },
  currentPrice: {
    fontSize: 25,
    fontWeight: "bold",
  },
  percentage: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
  },
  oldPrice: {
    color: "#8a8888",
    textDecorationLine: "line-through",
    fontWeight: "bold",
  },
  counterBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#F7F8FD",
    marginVertical: 10,
    borderRadius: 10,
  },
  counterBtn: {
    paddingHorizontal: 20,
  },
  counterBtnText: {
    fontSize: 30,
    color: "#FF7D1B",
    fontWeight: "bold",
  },
  counterNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addToCart: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    backgroundColor: "#FF7D1B",
    paddingVertical: 15,
    borderRadius: 10,
  },
  addToCartContent: {
    fontSize: 20,
  },
});
