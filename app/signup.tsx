import LoginButton from "@/components/LoginButton";
import { Text, View, TextInput } from "react-native"
import validator from "validator";
import { router, useLocalSearchParams } from "expo-router";
import axios from "axios";
import React from "react";
import { Alert } from "react-native";



const Page = () => {
    const [Email, setEmail] = React.useState("")
    const [validEmail, setValidEmail] = React.useState(true);
    const params = useLocalSearchParams();
    const [loading, setLoading] = React.useState(false);

    const phone = params?.phone;

    const handlePress = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://ec2-3-85-82-230.compute-1.amazonaws.com:3100/users/email/${Email}`);
            setLoading(false);
            if (response.status === 200) {
                Alert.alert("This email has already been registered")
            }
        } catch (error) {
            setLoading(false);
            router.navigate({
                pathname: '/signup2',
                params: {
                    phone: phone,
                    email: Email
                }
            });
        }
    }
    

    return (
        <View style={{flex: 1, backgroundColor: '#1b1b1b', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 75, fontFamily: "inikaBold"}}>PicMesh</Text>
            <Text style={{color: 'white', fontSize: 25, fontWeight: '400', marginTop: -12, fontFamily: "inikaRegular"}}>Snap, Share, Relive</Text>

            <View style={{width: '80%'}}><Text style={{fontFamily: "inikaRegular", color: 'white', alignSelf: "flex-start", marginBottom: -15, marginTop: 20, marginLeft: 20}}>E-Mail Address</Text></View>
                <TextInput 
                    style={{fontSize: 18, backgroundColor: '#1b1b1b', color: 'white', width: '80%', height: 60, borderRadius: 100, borderColor: 'white', borderWidth: 1, marginTop: 20, paddingLeft: 20}} 
                    placeholder="E-Mail" 
                    placeholderTextColor="gray"
                    keyboardType="email-address"
                    onChangeText={(text) => {
                        setEmail(text);
                        setValidEmail(validator.isEmail(text) || text === "");
                    }}
                    autoCorrect={false}
                    autoCapitalize='none'/> 
                    {!validEmail && <Text style={{color: 'red', marginTop: 10, alignSelf: 'flex-start', paddingLeft: '15%'}}>Enter a valid E-Mail address</Text>}

            <View style={{marginTop: 16, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <LoginButton text={"Continue"} onPress={() => {handlePress()}} disabled={!validEmail || loading} loading={loading}/>
            </View>
        </View>
    )
}

export default Page;