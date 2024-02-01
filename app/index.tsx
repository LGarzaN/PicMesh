import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import EventCard from '../components/EventCard';

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#1b1b1b",
    }}>
      <SafeAreaView
        style={{
          flex: 1, 
        }}>
        <Text style={styles.titleText}>
            Events
        </Text>
        <View
        style={styles.cardContainer}>
          <EventCard eventName={"FebreroFest"} startDate={new Date()} endDate={new Date()} numPeople={20} numPhotos={80}/>

        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 45,
        color: "#fff",
        margin: 20,
        //fontFamily: "inika-bold",
    },
    cardContainer: {
        flex: 1,
        margin: 10,
    }
});

export default App;