import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text } from 'react-native-elements';
import Pdf from 'react-native-pdf';

class PDF extends React.Component {
  state = {
    currentPage: 1,
  };
  handlePageChange = currentPage => {
    this.setState({
      currentPage
    });
  };

  render() {
    const { source } = this.props;

    return (
      <View style={styles.container}>
        <Text h4 style={styles.text}>Page { this.state.currentPage} </Text>
        <Pdf
          horizontal={true}
          enablePaging={true}
          fitWidth={true}
          spacing={0}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            this.handlePageChange(page);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25
  },
  pdf: {
    flex: 1,
    backgroundColor: '#ede',
    width: Dimensions.get('window').width
  },
  text: {
    marginTop: 25
  }
});


export default PDF;