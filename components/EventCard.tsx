import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

interface eventProps {
    eventName: String,
    startDate: Date,
    endDate: Date,
    numPeople: Number,
    numPhotos: Number,
}

const EventCard = (props: eventProps) => {
    return (
        <View style={styles.shadowContainer}>
            <LinearGradient
                colors={['rgba(250, 88, 99, 0.80)', 'rgba(63, 31, 90, 0.00)']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardContainer}
            >
                <View style={styles.cardContent}>
                    <View style={styles.photoView}>
                        <Image source={require('@/assets/images/party.jpg')} style={styles.imageView}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.eventName}>{props.eventName}</Text>
                        <View style={styles.numberContainer}>
                            <View>
                                <Text style={styles.numberTags}>Photos</Text>
                                <Text style={styles.eventNumbers}>{props.numPhotos.toString()}</Text>
                            </View>
                            <View>
                                <Text style={styles.numberTags}>People</Text>
                                <Text style={styles.eventNumbers}>{props.numPeople.toString()}</Text>
                            </View>
                        </View>
                        <View style={{alignItems: 'center', justifyContent: 'center', width: '100%', marginTop: '7%'}}>
                            <Text style={{fontSize: 14, color: 'gray'}}>Starts in 10 days</Text>
                        </View>
                    </View>
                </View> 
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    shadowContainer: {
        elevation: 4, // Android shadow
        shadowColor: 'black', // iOS shadow
        borderRadius: 25,
        opacity: 0.9,
        justifyContent: 'center',
    },
    cardContainer: {
        borderRadius: 25,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        height: '100%',
    },
    photoView: {
        width: '45%',
        height: '90%',
        borderRadius: 11,
        overflow: 'hidden',
    },
    imageView: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    textView: {
        width: '50%', 
        alignItems: 'flex-start',
        height: '90%',
        paddingTop: 5,
        paddingRight: 10,
    },
    eventName: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    eventDate: {
        fontSize: 12,
        color: 'gray',
    },
    eventNumbers:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    numberContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingRight: 10,
        marginTop: 10,
    },
    numberTags: {
        fontSize: 15,
        color: 'white',
    }
});

export default EventCard;
