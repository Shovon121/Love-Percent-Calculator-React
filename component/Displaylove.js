import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Displaylove=(prop)=>{

    if(prop.getData=="lodding.."){
        return <Text> Please Wait!</Text>
    
    
    } if(prop.getData.message){

        return <Text> Sorry! Something is wrong.</Text>


    }
    else{

        return(
            <View style={styles.container}>
    
        <Text style={styles.text}>{prop.getData.percentage}%</Text>
         <Text style={styles.text}>{prop.getData.result} </Text>
    
            </View>
        )


    }

 


}
export default Displaylove

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center'
  
    },

    text:{

        fontSize:30

    }


  });