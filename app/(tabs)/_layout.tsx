import { Tabs } from "expo-router";
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

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
                
            },
          }}>
            <Tabs.Screen   
                name="home"
                options={{
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={28}
                            color={focused ? "#FA5863" : color}
                            style={{ marginBottom: -15 }} // Center the icon
                        />
                    ),
                }}
            />
            <Tabs.Screen   
                name="createEvent"
                options={{
                  title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name='add-circle'
                            size={50}
                            color={"#fff"}
                            style={{ marginBottom: -15 }} // Center the icon
                        />
                    ),
                }}
            />
            <Tabs.Screen   
                name="user"
                options={{
                  title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={28}
                            color={focused ? "#FA5863" : color}
                            style={{ marginBottom: -15 }} // Center the icon
                        />
                    ),
                }}
            />
        </Tabs>
    )
} 