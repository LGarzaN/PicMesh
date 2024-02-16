import {Pressable, Text, Image, TextInput, View, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import * as ImagePicker from "expo-image-picker"; 
import { useLocalSearchParams } from 'expo-router';
import LoginButton from '@/components/LoginButton';
import { Stack, router } from 'expo-router';
import axios from 'axios';

const Page = () => {
    const params = useLocalSearchParams();
    const [image, setImage] = useState(null); 
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error2, setError2] = useState(false);
    const [user, setUser] = useState({
        email: params.email,
        password: "",
        phone: params.phone,
        username: "",
    });

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });    
        if (!result.canceled) {
          setImage(result.assets[0].uri as any);
        }
      };

      const handleClick = async () => {
        if (user.username === "" || user.password === "" || user.email === "" || user.phone === "") {
            setError2(true);
            Alert.alert("Please fill in all fields");
        } else {
            try{
                setLoading(true);
                const res = await axios.post("http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/users/signup", user);
                setLoading(false);
                if (res.status === 201) {
                    try {
                        await axios.post("http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/users/login", {
                            phone: user.phone,
                            password: user.password
                        });
                        router.navigate('/home');
                    } catch (error) {
                        Alert.alert("An error occured. Please try again later" + error);
                    }
                }
            } catch (error) {
                Alert.alert("An error occured. Please try again later" + error);
                setLoading(false);
            }


        }
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#1b1b1b", justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 75, fontFamily: "inikaBold"}}>PicMesh</Text>
            <Pressable style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}} onPress={pickImage}>
                {image ?
                 <Image source={{ uri: image }} style={{ width: 125, height: 125, borderRadius: 100 }} /> : 
                 <Image source={require('@/assets/images/userDefault.png')} style={{width: 125, height: 125, borderRadius: 100}} />
                 }
                <Text style={{color: 'gray', fontSize: 16, fontFamily: "inikaRegular"}}>Choose Image</Text>
            </Pressable>

            <View style={{width: '80%'}}><Text style={{fontFamily: "inikaRegular", color: 'white', alignSelf: "flex-start", marginBottom: -15, marginTop: 20, marginLeft: 20}}>E-Mail Address</Text></View>
            <TextInput 
                style={{fontSize: 18, backgroundColor: '#1b1b1b', color: 'white', width: '80%', height: 60, borderRadius: 100, borderColor: 'white', borderWidth: 1, marginTop: 20, paddingLeft: 20}} 
                placeholder="Ex. John Smith" 
                placeholderTextColor="gray"
                onChangeText={(text) => {
                    setError2(false);
                    setUser({...user, username: text});                    
                }}
                autoCapitalize='words'/> 

            <View style={{width: '80%'}}><Text style={{fontFamily: "inikaRegular", color: 'white', alignSelf: "flex-start", marginBottom: -15, marginTop: 20, marginLeft: 20}}>Password</Text></View>
            <TextInput 
                style={{fontSize: 18, backgroundColor: '#1b1b1b', color: 'white', width: '80%', height: 60, borderRadius: 100, borderColor: 'white', borderWidth: 1, marginTop: 20, paddingLeft: 20}} 
                placeholder="Password" 
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={(text) => {
                    setError2(false);
                    setUser({...user, password: text});                 
                }}
                autoCapitalize='none'/> 
            
            <View style={{width: '80%'}}><Text style={{fontFamily: "inikaRegular", color: 'white', alignSelf: "flex-start", marginBottom: -15, marginTop: 20, marginLeft: 20}}>Confirm Password</Text></View>
            <TextInput 
                style={{fontSize: 18, backgroundColor: '#1b1b1b', color: 'white', width: '80%', height: 60, borderRadius: 100, borderColor: 'white', borderWidth: 1, marginTop: 20, paddingLeft: 20}} 
                placeholder="Password" 
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={(text) => {
                    setError2(false);
                    if (text !== user.password) {
                        setError(true);
                    } else {
                        setError(false);
                    }
                }}
                autoCapitalize='none'/> 
            {error && <Text style={{color: 'red', marginTop: 10, alignSelf: 'flex-start', paddingLeft: '15%'}}>Passwords do not match</Text>}
            
            <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '20%',  marginTop: 20}}>
                <LoginButton text={"Continue"} onPress={handleClick} disabled={error || error2} loading={loading}/>
            </View>
        </SafeAreaView>
    )
}

export default Page;