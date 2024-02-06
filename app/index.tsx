import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Pressable, Button, ScrollView, FlatList } from 'react-native';
import EventCard from '../components/EventCard';
import { Link, router } from "expo-router";
import axios from 'axios'

interface Event {
  EventId: number;
  Name: string;
  NumPhotos: number;
  UniquePosters: number;
  Creator: string;
  StartDate: Date;
  EndDate: Date;
  CurrentStorage: number;
  StorageLimit: number;
  AllowCameraRoll: boolean;
}

const App = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/events/user/1');
      const data = response.data.events;
      let eventsArray:any = []; // Create an empty array to hold all events
  
      // Use Promise.all to wait for all requests to complete
      await Promise.all(data.map(async (event:any) => {
        const id = event.EventId;
        const response2 = await axios.get(`http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/events/${id}`);
        eventsArray.push(response2.data.events[0]);
      }));

      eventsArray.sort((a:Event, b:Event) => {
        const dateA = new Date(a.StartDate);
        const dateB = new Date(b.StartDate);
        const now = new Date();
        const isPastA = dateA < now;
        const isPastB = dateB < now;
 
        if (isPastA && !isPastB) return  1;
        if (!isPastA && isPastB) return -1;
        return dateA.getTime() - dateB.getTime(); 
      });

      setEvents(eventsArray);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchEvents();
  }, []);
  

  
  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1b1b1b",
          padding: 10,
        }}>
          <Text style={styles.titleText}>  
            Events
          </Text>
          <ScrollView style={styles.cardContainer}>
            {events.map((event) => (
              <Pressable key={event.EventId} onPress={() => {router.navigate(`/event/${event.EventId}`)}} style={{height: '25%', marginBottom: 15,}}>
                <EventCard eventName={event.Name} startDate={event.StartDate} endDate={event.EndDate} numPeople={event.UniquePosters} numPhotos={event.NumPhotos}/>
              </Pressable>
            ))}
          </ScrollView>
    </SafeAreaView>
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

    },
});

export default App;

/*
        <FlatList 
          data={events}
          renderItem={({item}) => <EventCard eventName={item.Name} startDate={item.StartDate} endDate={item.EndDate} numPeople={item.UniquePosters} numPhotos={item.NumPhotos}/>}
          keyExtractor={(item) => item.EventId.toString()}
        />
*/