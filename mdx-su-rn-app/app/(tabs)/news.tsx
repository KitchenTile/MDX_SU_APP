import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import NewsCard from "@/components/cards/NewsCard";
import CommunicationForm from "@/components/form";
import { getCommunications } from "@/api/fetchAPI";
// import image from "../../assets/images/Untitled_design-13.png";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const posts = await getCommunications();
        setNews(posts);
      } catch (err) {
        console.error("API Error:", err);
      }
    }

    fetchData();
  }, []);

  return (
    <View style={styles.pageContainer}>
      {news.map((individualNew: any) => (
        <NewsCard
          key={individualNew._id}
          title={individualNew.title}
          image={individualNew.img}
          createdAt={individualNew.createdAt}
        />
      ))}

      {/* <CommunicationForm /> */}
    </View>
  );
};

export default NewsPage;

const styles = StyleSheet.create({
  pageContainer: { alignItems: "center" },
});
