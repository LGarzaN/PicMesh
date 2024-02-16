import { Pressable, Text, StyleSheet, ActivityIndicator , TouchableOpacity, Image} from "react-native"

interface LoginProps {
    text : String;
    onPress: () => void;
    disabled? : boolean;
    loading?: boolean;
}
interface CircleProps {
    imgUrl: any;
    //handlePress: any;
}

export const CircleButton = (props:CircleProps) => {
    return (
      <TouchableOpacity style={{
        width : 40,
        height: 40,
        backgroundColor: "white",
        position: "absolute",
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        //...SHADOWS.light,
        ...props,
      }}
      //onPress={props.handlePress}
      >
        <Image source={props.imgUrl} resizeMode='contain' style={{width: 24, height: 24}}/>
      </TouchableOpacity>
    )
  }

const LoginButton = (props:LoginProps) => {
    return (
        <Pressable 
        style={({ pressed }) => [
            styles.button, // Keep your existing styles
            { backgroundColor: pressed ? '#B53C44' : '#FA5863' }, // Change background color on press
          ]}
          onPress={props.onPress}
          disabled={props.disabled ?? false}>
            <Text style={styles.text}>{props.loading ? <ActivityIndicator size="small" color="#fff" /> : props.text ?? "Continue"}</Text>
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