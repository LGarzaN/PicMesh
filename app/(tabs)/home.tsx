import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Pressable, View, ScrollView, ActivityIndicator } from 'react-native';
import EventCard from '@/components/EventCard';
import { router, Stack, Tabs } from "expo-router";
import { decode as atob, encode as btoa } from 'base-64';
import { useQuery } from '@tanstack/react-query';
import fetchEvents from '@/api/events'

if (!global.btoa) { global.btoa = btoa; }
if (!global.atob) { global.atob = atob; }


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
  const {data: events, isLoading} = useQuery({
    queryFn: async () => await fetchEvents(),
    queryKey: ["events"],
    refetchOnMount: 'always'
  })
  
  return (
    <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#1b1b1b",
          paddingTop: 15,
          paddingHorizontal: 10,
        }}>
            <Stack.Screen options={{headerTitle: "Events", headerRight(props) {
              return <Image source={require('@/assets/images/userDefault.png')} style={{width: 35, height: 35, marginRight: 20, borderRadius: 100}} />
            },}} />
          <ScrollView style={styles.cardContainer}>
            {events.length >  0 && !isLoading ? events.map((event:Event) => (
              <Pressable key={event.EventId} onPress={() => {router.navigate(`/event/${event.EventId}`)}} style={{height: 150, marginBottom: 15,}}>
                <EventCard eventName={event.Name} startDate={event.StartDate} endDate={event.EndDate} numPeople={event.UniquePosters} numPhotos={event.NumPhotos}/>
              </Pressable>
            )): <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}><Image source={require('@/assets/images/adaptive-icon.png')} style={{width: 200, height: 200}}/></View>}
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
        paddingTop: 10,
    },
});

export default App;


// const fetchEvents = async (userId:string) => {
//   console.log("user", userId);
//   try {
//     const response = await axios.get('http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/events/user/' + userId);
//     const data = response.data.events;
//     let eventsArray:any = []; // Create an empty array to hold all events

//     // Use Promise.all to wait for all requests to complete
//     await Promise.all(data.map(async (event:any) => {
//       const id = event.EventId;
//       const response2 = await axios.get(`http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/events/${id}`);
//       eventsArray.push(response2.data.events[0]);
//     }));

//     setEvents(eventsArray);
//   } catch (error) {
//     console.error(error);
//   }
// };