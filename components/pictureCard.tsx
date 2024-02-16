import { View, Text , Image, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native'
//import {COLORS, SIZES, SHADOWS, assets} from '../constants'
import { CircleButton } from './Buttons'
import { Likes } from '@/constants/PictureCardInfo'

const PictureCard = ({}) => {
  return (
    <View style = {styles.bg}>
        <View style ={styles.size}>
            <Image source={require('../assets/images/cat.jpg')} resizeMode='cover' style={styles.card}/>
            <CircleButton imgUrl={"../assets/images/cat.jpg"}></CircleButton>
        </View>
        <View style={styles.info}>
            <View>
                <Text style={styles.user}>Photo by: </Text>
                <View style={{flexDirection: "row", marginTop: 3}}>
                    <Image source={require("../assets/images/cat.jpg")} style={{width: 20, height: 20, borderRadius: 90, marginEnd: 5}}/>
                    <Text style={styles.user}>User69</Text>
                </View>
            </View>
            <Likes/>
        </View>
    </View>

  )
}
const styles = StyleSheet.create({
  bg: {//yes
    backgroundColor : 'black',
    borderRadius: 14,
    margin: 10,
  },
  size: {//yes
    width: "100%",
    height: 250
  },
  card: {//yes
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  context:{//yes
    width: "100%",
    padding: 14
  },
  info: { 
    width: "95%",
    paddingHorizontal: 7,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  txt:{
    color: 'white',
  },
  user:{
    color: '#B0B0B0',
    fontWeight: "bold",
  }

});

export default PictureCard