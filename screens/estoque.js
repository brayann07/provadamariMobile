// 5 produtos com imagem, nome e descrição e contador de quantidade ao clicar deve mudar a contagem
import { View, Text, ScrollView } from "react-native-web";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Image } from "react-native-web";
import { useState } from "react";
export default function Estoque(){
    const[contador,Setcontador]=useState(0)
    const[contador1,Setcontador1]=useState(0)
    const[contador2,Setcontador2]=useState(0)
    const[contador3,Setcontador3]=useState(0)
    const[contador4,Setcontador4]=useState(0)
    return(
        <View style={styles.container}>
            <ScrollView style={{}}>
            <Text style={{fontSize:40,alignSelf:'center'}}>Bem Vindo!</Text><br></br>
            <Image style={{width:200,height:100,justifyContent:'space-around',alignSelf:'center'}} source={{uri:'https://viverbem.unimed.coop.br/wp-content/uploads/2023/02/86-beneficios-da-maca.jpg'}}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>Maçã</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Super deliciosa</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Estoque:{contador}</Text>
            <View style={{flex:0.1,flexDirection:'row',alignSelf:'center'}}>
            <TouchableOpacity
             onPress={() => {Setcontador(contador+1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >+
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {Setcontador(contador-1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >-
            </TouchableOpacity>
        </View>
        <br></br><br></br>
            <Image style={{width:200,height:100,justifyContent:'space-around',alignSelf:'center'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOCRiGoW0wX-WEciNhJq3Z_RKg3VG2QjrPA&s'}}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>Pera</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Super Boa</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Estoque:{contador1}</Text>
            <View style={{flex:0.1,flexDirection:'row',alignSelf:'center'}}>
            <TouchableOpacity
             onPress={() => {Setcontador1(contador1+1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >+
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {Setcontador1(contador1-1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >-
            </TouchableOpacity>
        </View>
        <br></br><br></br>
            <Image style={{width:200,height:100,justifyContent:'space-around',alignSelf:'center'}} source={{uri:'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg'}}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>Banana</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Super radioativas</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Estoque:{contador2}</Text>
            <View style={{flex:0.1,flexDirection:'row',alignSelf:'center'}}>
            <TouchableOpacity
             onPress={() => {Setcontador2(contador2+1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >+
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {Setcontador2(contador2-1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >-
            </TouchableOpacity>
        </View>
        <br></br><br></br>
            <Image style={{width:200,height:100,justifyContent:'space-around',alignSelf:'center'}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fH6mVotpOfVftoOppU7wvixirThHB5w-cg&s'}}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>Romã</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Super Italiana</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Estoque:{contador3}</Text>
            <View style={{flex:0.1,flexDirection:'row',alignSelf:'center'}}>
            <TouchableOpacity
             onPress={() => {Setcontador3(contador3+1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >+
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => {Setcontador3(contador3-1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >-
            </TouchableOpacity>
        </View>
        <br></br><br></br>
            <Image style={{width:200,height:100,justifyContent:'space-around',alignSelf:'center'}} source={{uri:'https://www.comprafacilhortifruti.com.br/storage/431/conversions/maracuj%C3%A1-featured.jpg'}}/>
            <Text style={{fontSize:20,alignSelf:'center'}}>Maracuja</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Super nutritivo</Text>
            <Text style={{fontSize:20,alignSelf:'center'}}>Estoque:{contador4}</Text>
            <View style={{flex:0.1,flexDirection:'row',alignSelf:'center',alignSelf:'center'}}>
            <TouchableOpacity
             onPress={() => {Setcontador4(contador4+1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >+
            </TouchableOpacity>
            <br></br><br></br>
            <TouchableOpacity
            onPress={() => {Setcontador4(contador4-1)}}
             style={{
                width:50,
                height:50,
                backgroundColor:'white',
                borderWidth:2,
                borderRadius:20,
                fontFamily:'Arial',
                fontSize:20,
                textAlign:'center',
                justifyContent:'center'
              }}
            >-
            </TouchableOpacity>
        </View>
        
        
        </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'#aac5f2',
      fontFamily:"Arial",
      flex: 1,
      textAlign:'center'
    },
  });