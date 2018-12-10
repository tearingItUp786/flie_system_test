import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import PDF from './Pdf';

class Detail extends React.Component {
  render() {
    const { navigation } = this.props;
    const source = navigation.getParam('source', 'NO-ID');
    return (
      <View style={styles.container}>
        <Text h2>Detail</Text>
        <PDF 
          source={source}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

export default Detail;