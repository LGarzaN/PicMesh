import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native"

interface props {
    onPress: () => void;
    disabled? : boolean;
    loading?: boolean;
}

const LoginButton = (props:props) => {
    return (
        <Pressable 
        style={({ pressed }) => [
            styles.button, // Keep your existing styles
            { backgroundColor: pressed ? '#B53C44' : '#FA5863' }, // Change background color on press
          ]}
          onPress={props.onPress}
          disabled={props.disabled ?? false}>
            <Text style={styles.text}>{props.loading ? <ActivityIndicator size="small" color="#fff" /> : "Continue" ?? "Continue"}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 60,
        backgroundColor: '#FA5863',
        opacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontFamily: "inikaBold"
    }
})

export default LoginButton;