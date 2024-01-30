import React from "react";

import { View, Text, SafeAreaView } from "react-native";

const Home = () => {
    return (
        <SafeAreaView
        style={{
            alignItems: "center",
            justifyItems: "center"
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold"
            
            }}>HomePage</Text>
        </SafeAreaView>
    )
}

export default Home;