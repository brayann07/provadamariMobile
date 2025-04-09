// imagem ilustrativa e tres campos de entrada, nome email e mensagem em tempo real
import { View, Text, Image, TextInput} from "react-native-web";
import { StyleSheet } from "react-native";
import { useState } from "react";
export default function Contato() {
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [mensagem,setMensagem]=useState("")
    return(
        <View style={styles.container}>
             <Image style={{width:350,height:300,justifyContent:'space-around',alignSelf:'center',borderWidth:3,borderRadius:20}} source={{uri:'https://static6.depositphotos.com/1146092/631/i/450/depositphotos_6315043-stock-photo-dog-on-the-phone.jpg'}}/>
             <TextInput
                placeholder="Nome"
                style
                ={{
                  width:300,
                  height:100,
                  fontSize:20,
                  borderRadius:20,
                  borderWidth:2,
                  borderColor:'black',
                  fontFamily:'Arial',
                  textAlign:'center',
                  backgroundColor:'white',
                  alignSelf:'center',
                  marginTop:20,
                }}
                value={nome}
                onChangeText={value => setNome(value)}
              />   
              <TextInput
                  placeholder="Email"
                  style={{
                  fontSize:20,
                  width:300,
                  height:100,
                  borderWidth:2,
                  borderColor:'black',
                  borderRadius:20,
                  fontFamily:'Arial',
                  textAlign:'center',
                  alignSelf:'center',
                  backgroundColor:'white',
                  marginTop:20
                }}
                value={email}
                onChangeText={value => setEmail(value)}
              />

              <TextInput
                  placeholder="Mensagem"
                  style={{
                  fontSize:20,
                  width:300,
                  height:100,
                  borderWidth:2,
                  borderColor:'black',
                  borderRadius:20,
                  fontFamily:'Arial',
                  textAlign:'center',
                  alignSelf:'center',
                  backgroundColor:'white',
                  marginTop:20
                }}
                value={mensagem}
                onChangeText={value => setMensagem(value)}
              />

              <Text style={{textAlign:'center',fontSize:20}}>Olá {nome},seu E-mail é:{email} e <br></br>sua mensagem é:{mensagem}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#aac5f2',
  },
});