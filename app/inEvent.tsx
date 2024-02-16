import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button, FlatList, Image} from 'react-native';
import { useState } from "react";
import PictureCard from '@/components/pictureCard';

const inEvent = () => {
    interface renderProps{
        item: any;
    }
    const [isView1Active, setIsView1Active] = useState(true);

    const toggleView = () => {
        setIsView1Active(!isView1Active);
    };
    const renderItem = (props:renderProps) => (
        <Image source={props.item} style={styles.image} resizeMode="cover"/>
    );

    const images =[
        require('@/assets/images/cat.jpg'),require('@/assets/images/vertical.png'),require('@/assets/images/cat.jpg'),require('@/assets/images/cat.jpg'),require('@/assets/images/cat.jpg'),require('@/assets/images/cat.jpg'),require('@/assets/images/vertical.png'),require('@/assets/images/cat.jpg')
    ];

    return (
        <View style={styles.area}>
          <View style={styles.container1}>
            <Text style={styles.title}>EventName</Text>
            <View style={{flexDirection: "row", justifyContent: 'space-between', width: "100%"}}>
              <Text style={styles.date}>12 Feb de 2024</Text>
              <Button title="Toggle View" 
              onPress={toggleView} />
            </View>
          </View>
          {isView1Active ? (
            <View>
              <ScrollView>
                      <PictureCard />
                      <PictureCard />
                      <PictureCard />
                      <PictureCard />
                      <PictureCard />
                      <PictureCard />
              </ScrollView>
            </View>
          ) : (
            <View style={styles.container2}>
              <FlatList
                data={images}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3} // Optional: for a  3-column grid
              />
            </View>
          )}
        </View>
      );
}
const styles = StyleSheet.create({
    area: {
      flex: 1,
      backgroundColor: "#1B1B1B",
      zIndex: -1
    },
    image: {
      width: '32.2%',
      height:  240, // Adjust as needed
      resizeMode: 'cover',
      margin: '0.5%',
    },
    container1:{
      alignItems: 'flex-start',
      height:"17%",
      width: "100%",
      padding: 10,
      paddingTop: 40
    },
    container2:{
      alignItems: 'center',
      justifyContent: 'center',
      height:"100%",
      width: "100%"
    },
    title:{
      color: 'white',
      fontWeight: "bold",
      fontSize: 36,
      paddingTop: 20,
      fontFamily: "inikaBold"
    },
    date:{
      color: '#656565',
      fontWeight: "bold",
      fontSize: 17,
      marginTop: 6,
      //fontFamily: "inikaRegular"
    },
  });

export default inEvent;