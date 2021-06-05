import React from "react";
import { StyleSheet, ImageBackground, Image, TouchableOpacity, Text, ScrollView, View} from "react-native";
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons'; 

// importing component
import Header from "./header";

const ViewArticle = () => {
  return (

    <View style={styles.container}>
        <Header content="View Article" navigation />
        <View style={styles.scrollContainer}>
         <ScrollView style={{flex:1}}>
            <View style={styles.imgContainer}>
              <ImageBackground source={require("../images/mountains.png")} style={styles.img}>
                  <MaterialCommunityIcons name="pencil" size={30} style={styles.icon} color="#4F2F24" />

              </ImageBackground>
            </View>            

            <View style={{flexDirection:"row"}}>
              <View style={{flex:3}}>
                <Text style={styles.author}>By: Author Name</Text>
                <Text style={styles.location}>Location: Location name</Text>
              </View>
            <View style={{flexDirection:"row-reverse",marginLeft:"5%", alignSelf:"center",flex:1}}>
              <FontAwesome5 name="trash" size={36} color="#4F2F24"/>
            </View>
            </View>

            <Text style={styles.details}>Details</Text> 

            <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
        </ScrollView>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details:{
    marginTop:10,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    marginLeft:"5%",
    fontSize:20,
    color:"#4F2F24",
  },

  location:{
    marginTop:10,
    fontSize:20,
    color:"#4F2F24",
    marginLeft:"7%",
  },
  author:{
    marginTop:18,
    fontWeight:"bold",
    fontSize:24,
    color:"#4F2F24",
    marginLeft:"7%",
  },
  container: {
    backgroundColor: "#5C3B28",
    width: "100%",
    height: "100%",
    flex:1,
  },
  text: {
    width:"90%",
    marginTop:10,
    fontSize: 18,
    color:"#4F2F24",
    marginLeft:"5%",

  },
  scrollContainer:{
    marginTop:"5%",
    alignSelf:"center",
    backgroundColor: '#F1CBAE',
    width:"93%",
    flex:1,
  },
  imgContainer:{
    marginTop:"5%",
    alignSelf:"center",
    alignItems:"center",
    width:"90%",
    height:220,
  },
  img:{
    resizeMode:"contain",
    height:"100%",
    width:"100%",
    flexDirection:"row-reverse",
  },
  icon:{
    margin:10,
  },

});

export default ViewArticle;
