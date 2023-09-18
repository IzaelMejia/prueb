import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import Saludos from '../Components/Saludos'
import { colors } from '../Global/colors'
import Premium from '../Components/Premium'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Sensores = ({ navigation }) => {
  return (
    <View style={styles.fondoSensores}>
      <Saludos/>
      <Premium/>
      <View style={styles.contenedorInfoClima}> 
        <View style={styles.climaIcono}>
            <Image
            source={require('../img/sensoresImg/sensor-clima.png')}
            style={styles.imgSensorClima}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contenedorTextoClima}>
          <MaterialIcons name="arrow-drop-up" size={24} color="black" />
        <View style={styles.contenedorTextoClima2}>
            <Text style={styles.climaLugar}>Pachuca, Hidalgo</Text>
            <Text style={styles.climaGrados}>22 C</Text>
        </View>
          
      </View>
      </View>

          {/*-------------- Temperatura de los Sensores --------------*/}
      <View style={styles.contenedorSensoresTemperatura}>
        <View style={styles.temperatura}>
          <Text style={styles.textoTemperatura}>28°</Text>
          <MaterialCommunityIcons name="sun-thermometer" size={35} color={colors.blanco} 
              style={styles.iconoSolTemperatura}/>
        </View>
        
        <View style={styles.humedad}>
          <Text style={styles.textoHumedad}>18°</Text>
          <MaterialCommunityIcons name="sun-thermometer" size={35} color={colors.verdeFuete} 
                style={styles.iconoSolTemperatura}/>
        </View>

      </View>

      <View style={styles.ContendedorTextoTemHum}>
        <View >
            <Text style={styles.texto}>Temperatura   </Text>
        </View>
        <View >
            <Text style={styles.texto}>Humedad   </Text>
        </View>
      </View>

    </View>
  )
}

export default Sensores

const styles = StyleSheet.create({
    fondoSensores:{
        flex:1,
        backgroundColor:colors.verdePistache
    },
    contenedorInfoClima:{
      marginTop:20,
      alignItems:"center"
    },
    imgSensorClima:{
      width:130,
      height:130
    },
    contenedorTextoClima:{
      flexDirection:'row',
      
  },
  contenedorTextoClima2:{
      flexDirection:'column',
      alignItems:"center",
      
  },
    climaLugar:{
      fontSize:18,
      color:colors.verdeFuete

  },
  climaGrados:{
      color:"grey",
      fontSize:12,
    
  },

  contenedorSensoresTemperatura:{
    marginTop:30,
    flexDirection:"row",
    justifyContent:'space-evenly'
  },

  temperatura:{
    width:80,
    height:200,
    backgroundColor:colors.verdeFuete,
    borderRadius:50 
  },

  textoTemperatura:{
    textAlign:"center",
    margin:"auto",
    fontSize:40,
    padding:2,
    color:colors.blanco,
    fontWeight:700,
    marginVertical:42
  },
  iconoSolTemperatura:{
    textAlign:"center",
    marginBottom:10
  },

  humedad:{
    width:80,
    height:200,
    backgroundColor:colors.blanco,
    borderRadius:50 
  },

  textoHumedad:{
    textAlign:"center",
    margin:"auto",
    fontSize:40,
    padding:2,
    color:colors.verdeFuete,
    fontWeight:700,
    marginVertical:42
  },
  ContendedorTextoTemHum:{
    flexDirection:"row",
    justifyContent:"space-evenly",
    textAlign:"center",
    marginTop:5
  },
  texto:{
    color:colors.verdeFuete,
    fontWeight:700
  }

  


})