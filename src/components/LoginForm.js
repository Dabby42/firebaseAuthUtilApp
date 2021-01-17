import React from 'react';
import {StyleSheet, Text} from 'react-native';
import firebase from 'firebase';
import {Card, CardSection, Button, Input, Spinner} from './common';

class LoginForm extends React.Component {
  state = {email: '', password: '', error: '', loading: false};

  submitCredentials() {
    const {email, password} = this.state;

    this.setState({error: '', loading: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() =>
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailure.bind(this)),
      );
  }

  onLoginFailure() {
    this.setState({
      error: 'An error occured!',
      loading: false,
    });
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', loading: false});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onSubmit={this.submitCredentials.bind(this)}>Log in</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            secureTextEntry={false}
            placeholder="name@example.com"
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            secureTextEntry={true}
            placeholder="password"
          />
        </CardSection>
        {this.state.error ? (
          <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        ) : null}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
});

export default LoginForm;
