import React, { useEffect } from 'react';
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Layout = () => {
    const [loaded] = useFonts({
        "inikaBold": require('@/assets/fonts/Inika-Bold.ttf'),
        "inikaRegular": require('@/assets/fonts/Inika-Regular.ttf'),
    })
    if (!loaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
    <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#1b1b1b',
        },
        headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 30
            },
            headerShadowVisible: false,
    }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="inEvent" options={{headerShown: false}}/>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" options={{headerTitle: ""}}/>
        <Stack.Screen name="signup2" options={{headerTitle: ""}}/>
        <Stack.Screen name="createEvent" options={{
            headerTitle: "Create Event", 
            presentation: 'modal'}}/>
    </Stack>
    </QueryClientProvider>
    )
}

export default Layout;
