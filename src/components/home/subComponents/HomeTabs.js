import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

//-> component imports
import ItemsAll from "./ItemsAll";
import CategoryOne from "./CategoryOne";

const renderScene = SceneMap({
  first: ItemsAll,
  second: CategoryOne,
});

const HomeTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: "first", title: "All" },
    { key: "second", title: "Category One" },
  ]);

  const renderTabBar = (props) => <TabBar />;

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          {...props}
          scrollEnabled
          indicatorStyle={{
            backgroundColor: "#D1C3FE",
            borderRadius: 10,
            height: 1,
          }}
          style={{ backgroundColor: "transparent", elevation: 0 }}
          labelStyle={{
            color: "#3C4448",
            fontSize: 14,
            textTransform: "capitalize",
            fontFamily: "NunitoRegular",
            borderWidth: 1,
            borderColor: "#b6aaec",
            paddingHorizontal: 10,
            paddingVertical: 3,
            borderRadius: 15,
          }}
          tabStyle={{
            backgroundColor: "transparent",
            width: "auto",
          }}
          // activeColor={{
          //   color: "red",
          // }}
          pressOpacity={0}
          pressColor={5}
        />
      )}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default HomeTabs;
