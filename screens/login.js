// campo de entrada email e senha + botao entrar q leva pras demais telas com stack
import { View, Text, TextInput } from "react-native-web";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStaticNavigation } from "@react-navigation/native";

export default function Login() { 
  const navigation = useNavigation();
    return(
        <View style={styles.container}>
          <br></br><br></br><br></br><br></br><br></br><br></br>
          <View style={{flex:1,alignItems:'center'}}>
          <Text style={styles.textoinicio}>Bem-vindo!</Text>
            <TextInput
              placeholder="E-mail"
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
                marginTop:20
              }}
            />
            
            <TextInput
               placeholder="Senha"
               style={{
                fontSize:20,
                width:300,
                height:100,
                borderWidth:2,
                borderColor:'black',
                borderRadius:20,
                fontFamily:'Arial',
                textAlign:'center',
                backgroundColor:'white',
                marginTop:20
              }}
            />
            <br></br>
            <TouchableOpacity
            onPress={() => navigation.navigate('Estoque')}
            placeholder="logar"
            style={{
              width:200,
              height:100,
              backgroundColor:'white',
              borderWidth:3,
              borderRadius:20,
              fontFamily:'Arial',
              fontSize:20,
              textAlign:'center',
              justifyContent:'center'
            }}
            >Logar
            </TouchableOpacity>

            
          </View>
        </View>
        
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#aac5f2',
    
  },
  textoinicio:{
    textAlign:'center',
    fontSize:50,
    marginTop:40
  }
});
