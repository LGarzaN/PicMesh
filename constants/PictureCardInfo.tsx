import { View, Text , StyleSheet, Image, ImageSourcePropType} from 'react-native'
import React from 'react'
//import { COLORS, SIZES, assets, SHADOWS, FONTS } from '../constants'

interface ImageCmpProps{
    imgUrl: React.JSX.Element
    index: number;
}

export const ImageCmp = (props:ImageCmpProps) => {
    return (
        <View style={{
            borderWidth: 2, 
            borderColor: 'black', 
            borderRadius: 90, 
            marginLeft: props.index === 0 ? 0 : -12,
        }}>
            <Image source={require('../assets/images/cat.jpg')} style={{        
                width: 20,
                height: 20,
                borderRadius: 90,
            }}/>
        </View>
    )
}
export const People = () => {
    return (
        <View style={styles.people}>
                {[<Image source={require("@/assets/images/cat.jpg")}/>, <Image source={require("@/assets/images/cat.jpg")}/>, <Image source={require("@/assets/images/cat.jpg")}/>].map((imgUrl, index)=> (
                <ImageCmp imgUrl={imgUrl} index={index}/>))}
        </View>
    )
}  
export const Likes = () => {
    return (
        <View style={styles.container}>
            <People/>
            <Text style={styles.txt}> 180 Likes</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    subInfo: {
      width: "100%",
      paddingHorizontal: 14,
      marginTop: -24,
      flexDirection: "row",
      justifyContent: 'space-between'
    },
    people: {
        flexDirection: "row",
    },
    date: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        backgroundColor: "white",
        justifyContent: 'center',
        alignContent: 'center',
        //...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%"
    },
    txt: {
        color: '#B0B0B0',
        fontSize: 14,
        fontWeight: "bold"
    },
    container:{
        flexDirection: "row",
        alignContent: "space-between"
        
    }

  });
