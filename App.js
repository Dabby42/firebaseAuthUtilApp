import React from 'react';
import firebase from 'firebase';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Spinner, Header} from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {
  state = {loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
      apiKey: process.env.API_KEY,
      authDomain: process.env.API_KEY,
      projectId: process.env.API_KEY,
      storageBucket: process.env.API_KEY,
      messagingSenderId: process.env.API_KEY,
      appId: process.env.API_KEY,
      measurementId: process.env.API_KEY,
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  onSignOut() {
    firebase.auth().signOut();
  }

  renderForm() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onSubmit={this.onSignOut}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <SafeAreaView>
        <Header headerText="Authentication" />
        {this.renderForm()}
      </SafeAreaView>
    );
  }
}
// forceInset={{top: 'always'}}
const styles = StyleSheet.create({});

export default App;
