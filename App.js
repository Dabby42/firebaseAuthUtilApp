import React from 'react';
import firebase from 'firebase';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import {Button, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCt19ZypYlqRLPvWDgYTOOe5fCAeDkUyYY',
      authDomain: 'auth-68da8.firebaseapp.com',
      projectId: 'auth-68da8',
      storageBucket: 'auth-68da8.appspot.com',
      messagingSenderId: '46794554021',
      appId: '1:46794554021:web:be97fda1e5da0ae0db2b4c',
      measurementId: 'G-CKLZE9HLYE',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  state = {loggedIn: null};
  renderForm() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderForm()}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
