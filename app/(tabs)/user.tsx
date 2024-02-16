import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LoginButton from '@/components/LoginButton';
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
        <View style={{ flex: 1, backgroundColor: '#1B1B1B' }}>
        <View style={styles.topContainer}>
            <View style={{paddingTop: 40, paddingBottom: 6}}>
                <Image source={require('@/assets/images/cat.jpg')} style={styles.image}/>
            </View>
                <TouchableOpacity>
                <Text style={styles.edit}>edit</Text>

                </TouchableOpacity>
            <Text style={styles.title}>UserName</Text>
            <Text style={styles.phone}>+ 52 81 1482 3428</Text>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.boxBottom}/>
            <View style={styles.boxTop}/>
            <Text style={styles.infoTxt}>Account Info</Text>
            <View style={styles.line}/>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTxt}>email:</Text>
                <Text style={styles.detailTxt}>user.name@gmail.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTxt}>email:</Text>
                <Text style={styles.detailTxt}>user.name@gmail.com</Text>
            </View>
            <View style={styles.center}>
                <LoginButton text={"Sign Out"} onPress={signOut}/>
            </View>
        </View> 
    </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width: 180,
        height: 180,
        borderRadius: 100,
    },
    topContainer: {
        flex: 4.5,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 70
    }, 
    bottomContainer: {
        flex: 6,
        alignItems: "flex-start",
        padding: 35,
    },
    title:{
        color: 'white',
        fontWeight: "bold",
        fontSize: 36
    },
    infoTxt:{
        color: '#B0B0B0',
        fontSize: 20,
        zIndex: 3,
    },
    detailTxt:{
        color: 'white',
        fontSize: 20,
        zIndex: 3,
    },
    edit:{
        color: "#272ECA",
        fontSize: 14
    },
    line:{
        height: 1,
        width: '100%',
        backgroundColor: '#B0B0B0',
        marginVertical: 5,
        zIndex: 3,
    },
    infoContainer:{
        marginVertical: 7,
        paddingVertical: 5,
        zIndex: 3,
    },
    phone:{
        color: '#B0B0B0',
        fontSize: 12,
        fontWeight: "bold",
    },
    boxBottom:{
        height: 70,
        width: 70,
        backgroundColor: 'black',
        zIndex: 1,
        position: 'absolute',

    },
    boxTop:{
        height: 120,
        width: 120,
        backgroundColor: '#1B1B1B',
        zIndex: 2,
        position: 'absolute',
        borderTopLeftRadius: 90
    },
    center:{
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 190
    }
});

export default Page;