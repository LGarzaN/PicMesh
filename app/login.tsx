import LoginButton from '@/components/LoginButton';
import React from 'react';
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, router } from 'expo-router';
import validator from 'validator';
import { useQueryClient } from '@tanstack/react-query';


const Page = () => {
    const [formattedValue, setFormattedValue] = React.useState("");
    const [userExists, setUserExists] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [wrongPassword, setWrongPassword] = React.useState(false);
    const [validPhone, setValidPhone] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(false);
    const queryClient = useQueryClient();

    const handlePress = async () => {

        if (userExists) {
            try {
                setIsLoading(true);
                const response = await axios.post('http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/users/login', {
                    phone: formattedValue,
                    password: password
                });

                setIsLoading(false);
                if (response.status === 200) {
                    try {
                        await AsyncStorage.setItem("token", response.data.token);
                        queryClient.invalidateQueries();
                        try {
                            await AsyncStorage.setItem('profilePicture', response.data.profilePicture);
                        } catch (error) {
                            console.log(error, "login");
                        }
                        router.navigate('/home');
                    } catch (error) {
                    }
                }
            } catch (error) {
                setIsLoading(false);
                setWrongPassword(true);      
            }

            } else{
                try {
                    setIsLoading(true);
                    const response = await axios.get(`http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/users/${formattedValue}`);
                    setIsLoading(false);
                    if (response.status === 200) {
                        setUserExists(true);
                    }
                } catch (error) {
                    setIsLoading(false);
                    router.navigate({
                        pathname: '/signup',
                        params: {
                            phone: formattedValue
                        }
                    });
                }
        }  
} 
    return (
        <View style={{flex: 1, backgroundColor: '#1b1b1b', justifyContent: 'center', alignItems: 'center'}}>
            <Stack.Screen options={{headerShown: false}} />
            <Text style={{color: 'white', fontSize: 75, fontFamily: "inikaBold"}}>PicMesh</Text>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '400', fontFamily: "inikaRegular", marginTop: -12}}>Snap, Share, Relive</Text>
            <View style={{marginTop: 20}}>
                <PhoneInput
                withDarkTheme
                defaultCode="MX"
                layout="first"
                onChangeFormattedText={(text) => {
                setFormattedValue(text);
                setUserExists(false);
                setValidPhone(validator.isMobilePhone(text, 'any', {strictMode: true}) || text === '')
                }}
                withShadow
                autoFocus
                textInputStyle={{color: 'white', fontSize: 18}}
                textContainerStyle={{backgroundColor: '#1b1b1b', borderRadius: 100, padding: 10, borderColor: 'white', borderRightWidth: 1, borderLeftWidth: 0}}
                countryPickerButtonStyle={{backgroundColor: '#1b1b1b', borderColor: 'white', borderLeftWidth: 1, borderRadius: 100, borderTopWidth: 0, borderBottomWidth: 0, borderRightWidth: 1.5, borderTopRightRadius: 0, borderBottomRightRadius: 0}}
                containerStyle={{backgroundColor: '#1b1b1b', borderRadius:100, borderColor: 'white', borderWidth: 1}}
                codeTextStyle={{color: 'white'}}
                flagButtonStyle={{borderColor: 'white', borderWidth: 1, borderRightWidth: 0}}
                textInputProps={{placeholder: 'Phone Number', placeholderTextColor: 'gray'}}
            />
            {!validPhone && <Text style={{color: 'red', marginTop: 10, alignSelf: 'flex-start', paddingLeft: '15%'}}>Enter a valid phone number</Text>}


          </View>
          {userExists && 
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                    <TextInput 
                    style={{fontSize: 18, backgroundColor: '#1b1b1b', color: 'white', width: '80%', height: 60, borderRadius: 100, borderColor: 'white', borderWidth: 1, marginTop: 20, paddingLeft: 20}} 
                    placeholder="Password" 
                    placeholderTextColor="gray" 
                    secureTextEntry={true}
                    onChangeText={(text) => {setPassword(text), setWrongPassword(false)}}
                    autoCapitalize='none'/> 
                </View>
            }
            {wrongPassword && <Text style={{color: 'red', marginTop: 10, alignSelf: 'flex-start', paddingLeft: '15%'}}>Incorrect Password</Text>}

          <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 18}}>
            <LoginButton onPress={handlePress} disabled={!validPhone || formattedValue === "" || isLoading} loading={isLoading}/>
          </View>

          
        </View>
    ); 
}

export default Page;