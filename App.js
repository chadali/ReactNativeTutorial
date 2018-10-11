import React, { Component } from 'react';
import {ActivityIndicator, FlatList, Button, ScrollView, StyleSheet, Text, View, Image, TextInput, Alert } from 'react-native';


class Greetings extends Component {
  render() {
    return (
      <Text style={styles.redText}> Wassup, {this.props.name} </Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true}

    setInterval( () => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText}
      })
    }, 1000);

  }

  render() {
    let display = this.state.isShowingText ? this.props.text : "";
    return (
      <Text>{display}</Text>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""}
  }

  render() {
    return(
      <View style={{padding: 20}}>
        <TextInput 
          style={{height: 40}}
          placeholder = "Type here to translate!"
          onChangeText = {(text) => this.setState({text: text})}
        />
        <ScrollView style={{height: 400}} maximumZoomScale={10}>
          <Text style={{fontSize: 42}}>
            { this.state.text.split(' ').map( (word) => word && "🍕").join(" ") } 
          </Text>
        </ScrollView>
      </View>
    );
  }
}

class ExampleFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {finished: false, data: ""}
  }
  
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then( (response) => response.json())
      .then( (responseJson) => {
        this.setState( previousState => {return {finished: true, data: responseJson.movies}} )
      })
      .catch( (error) => {
        console.log(error);
      });
  }

  render() {
    if(!this.state.finished) {
      return (
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <View style={{}}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text style={{height: 44, fontSize: 15}}> {item.title}, released {item.releaseYear} </Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

export default class App extends Component {
  render() {

    let pic = { uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };

    return (
      <View style={styles.pizza}>
        {/*<Blink text="Blinking Text"/>
        <Text>Test! New Text.</Text>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greetings name="Ali"/>
        <Greetings name="Bob"/>
        <View style={{flex: 1, backgroundColor: "powderblue"}} />
        <View style={{flex: 2, backgroundColor: "skyblue"}} />
        <View style={{flex: 1, backgroundColor: "steelblue"}} />
        <PizzaTranslator/>*/}
        <ExampleFlatList/>
        <Button
          onPress = { () => { Alert.alert('tapped button'); }}
          title = "Alert Button"
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {

  },
  redText: {
    color: 'red'
  },
  flex: {
    flex: 1
  },
  pizza: {
    flex: 1,
    padding: 30,
  },
});
