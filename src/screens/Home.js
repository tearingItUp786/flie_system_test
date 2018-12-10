import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';

const pdfs = [
  {
    uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf'
  },
  {
    uri:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    uri: 'http://unec.edu.az/application/uploads/2014/12/pdf-sample.pdf'
  }
];

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text h2>Home</Text>
        {pdfs.map((item, i) => {
          return (
            <ListItem
              key={i}
              leftIcon={{ name: 'menu' }}
              title="Chris Jackson"
              subtitle="Vice Chairman"
              titleStyle={{ color: 'black', fontWeight: 'bold' }}
              containerStyle={styles.listItem}
              onPress={() => {
                this.props.navigation.navigate('Detail', {
                  source: item
                });
              }}
              onLongPress={() => {
                alert('damn son');
              }}
              chevron
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listItem: {
    width: '100%'
  }
});

export default Home;
