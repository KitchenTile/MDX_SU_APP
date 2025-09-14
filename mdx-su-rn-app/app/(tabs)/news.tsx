import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NewsCard from "@/components/cards/NewsCard";
// import image from "../../assets/images/Untitled_design-13.png";

const NewsPage = () => {
  return (
    <View style={styles.pageContainer}>
      <NewsCard
        title="Meet Your Student Officer Team 2025/2026"
        image="../../assets/images/Untitled_design-13.png"
        createdAt={new Date("2025-09-12")}
      />
    </View>
  );
};

export default NewsPage;

const styles = StyleSheet.create({
  pageContainer: { alignItems: "center" },
});
