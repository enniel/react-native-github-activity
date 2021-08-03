import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

interface StateType {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<any, StateType> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('componentDidCatch -> error', error);
    console.debug('componentDidCatch -> errorInfo', errorInfo);
    this.setState({
      error: error,
      errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <View style={styles.container}>
          <Text>Что-то пошло не так!</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
