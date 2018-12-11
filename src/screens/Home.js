import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Text } from 'react-native-elements';
import RNFetchBlob from 'rn-fetch-blob';
import axios from 'axios';

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
    const { fs, config } = RNFetchBlob;
    const { DocumentDir } = fs.dirs;

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
                config({
                  path: DocumentDir + `/${i}.pdf`
                })
                  .fetch('GET', 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf')
                  .then(res => {
                    console.log('The file was saved to', res.path());
                    item.uri = res.path();
                    console.log(item);
                  });
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
