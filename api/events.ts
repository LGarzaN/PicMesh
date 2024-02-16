import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";


const fetchEvents = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        const decoded = JSON.parse(atob(token.split('.')[1]));
        const response = await axios.get('http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/events/user/' + decoded.userId);
        return response.data.events;
      } else {
        router.navigate('/login');
        return [];
      }
    } catch (error) {
      console.log(error, "error");
      return [];
    }
}

export default fetchEvents;