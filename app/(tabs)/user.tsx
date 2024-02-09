import { Text, View } from 'react-native'
import { Stack } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const Page = () => {
    const signOut = async () => {
        try {
            await AsyncStorage.setItem("token", "");
            router.navigate('/login');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View>
            <Stack.Screen options={{headerTitle: "User"}} />
            <Text>user</Text>
            <View>
                <Text onPress={async () => {await signOut()}}>Sign Out</Text>
            </View>
        </View>
    )
}

export default Page;