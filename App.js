import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import Displaylove from'./component/Displaylove';

class App extends React.Component {

  state = {
    fname: '',
    sname: '',
    result:"lodding.."

  


  }

  submitid(){
 

    fetch( `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname} ` ,{headers:{

      "x-rapidapi-host":"love-calculator.p.rapidapi.com",
      "x-rapidapi-key":"3ccce75294mshc9c58636f6aa59dp14b2ebjsn8c31b0a0610c"}

  }).then(data=>data.json()).then(data2=>{
     // console.log(data2)

      this.setState({

        result:data2
        
       
      })

    })
    
   

  }

  render() {
    return (
      <View style={styles.container}>

      

        <Appbar.Header >


          <Appbar.Content title="Love % Calculator" style={{ alignItems: 'center' }} ></Appbar.Content>

        </Appbar.Header>

        <TextInput
          style={{margin:8 ,padding:5}}
         
          label='Name(male)'
          value={this.state.fname}
          onChangeText={text => this.setState({ fname:text })}
        />
        <TextInput
          label='Name(female)'
          style={{margin:8 ,padding:5}}
          value={this.state.sname}
          onChangeText={text => this.setState({sname :text })}
        />

        <Button icon="check" mode="contained" style={{ margin: 10 }} onPress={this.submitid.bind(this)}>
          Click
        </Button>

        <Displaylove  getData={this.state.result}></Displaylove>
       


      </View>
    );
  }

}


export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
