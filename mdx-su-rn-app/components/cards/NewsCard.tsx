import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";

const NewsCard = ({
  image,
  title,
  createdAt,
}: {
  image: string;
  title: string;
  createdAt: string;
}) => {
  //   const formattedDate = createdAt.toLocaleDateString("en-GB", {
  //     day: "numeric",
  //     month: "short",
  //     year: "numeric",
  //   });

  console.log(typeof createdAt);
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={
          //   uri: image,
          require("../../assets/images/Untitled_design-13.png")
        }
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {title}
        </Text>
        <Text style={{ fontSize: 13 }}>{createdAt}</Text>
      </View>
      <TouchableOpacity style={styles.arrowRight} onPress={() => {}}>
        <FontAwesome6 name="arrow-right" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "95%",
    borderColor: "#2c2c2c86",
    borderWidth: 0,
    borderRadius: 10,
    boxShadow: "rgba(0, 0, 0, 0.41) 0px 0px 10px 0px",
    marginBlock: 10,
    flexDirection: "row",
    maxHeight: 200,
    overflow: "hidden",
  },
  textContainer: {
    padding: 10,
    maxWidth: "65%",
  },
  cardImage: {
    maxWidth: "35%",
    height: 100,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    flexShrink: 1,
    marginBottom: 10,
  },
  arrowRight: {
    position: "absolute",
    right: 15,
    bottom: 10,
  },
});
