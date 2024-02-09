import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text } from 'react-native';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkJWT = async () => {
      try {
        const jwt = await AsyncStorage.getItem('token');
        setIsLoading(false);
        if (jwt !== null && jwt !== '') {
          router.navigate("/home"); // Go to home if JWT exists
        } else {
          router.navigate('/login'); // Go to login if JWT does not exist
        }
      } catch (error) {
        console.log('Error retrieving token', error);
        router.navigate('/login'); // Assume no JWT and go to login
      }
    };

    checkJWT();
  }, []);

  if (isLoading) return <Text>Loading</Text> // Return null since the actual content will be determined by navigation
};

export default Layout;