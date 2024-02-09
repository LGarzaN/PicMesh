import { Tabs } from "expo-router";
import React from 'react';

export default function Layout() {
    return (
        <Tabs screenOptions={{
            headerStyle: {
              backgroundColor: '#1b1b1b',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 35,
              fontFamily: "inikaRegular",
            },
            headerStatusBarHeight: 30,
            headerShadowVisible: false,
            tabBarStyle: {
                backgroundColor: '#1b1b1b',
                borderTopColor: 'transparent',
            },
          }}>
            <Tabs.Screen name="home"/>
            <Tabs.Screen name="user" />
        </Tabs>
    )
} 