import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateEvent = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{color: 'white'}}>Create Event</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f0f0f",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CreateEvent;