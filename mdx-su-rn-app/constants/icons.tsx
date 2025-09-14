import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";

export const icon = {
  Events: (props: any) => (
    <Ionicons name="calendar-outline" size={24} color="black" {...props} />
  ),
  index: (props: any) => (
    <Feather name="home" size={24} color={"#222"} {...props} />
  ),
  // explore: (props: any) => <FontAwesome6 name="newspaper" size={24} color="black" {...props}/>,

  news: (props: any) => (
    <FontAwesome6 name="newspaper" size={24} color="black" {...props} />
  ),
  // profile: (props: any) =>  <Feather name='user' size={24} color={"#222"} {...props}/>,
  store: (props: any) => (
    <Feather name="shopping-cart" size={24} color="black" />
  ),
};
