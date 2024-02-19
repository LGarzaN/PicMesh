import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';


const eventPage = () => {
    const params = useLocalSearchParams();
    const eventId = params.eventId as string;
    console.log(eventId);
    return (
        <View>
            <Text>Event Page</Text>
            <Text>Event ID: {eventId}</Text>
        </View>
    )
}

export default eventPage;