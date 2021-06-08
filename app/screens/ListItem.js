// App.js
/*
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resourcePath: {},
    };
  }

  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };

  // Launch Camera
  cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }

  imageGalleryLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (res) => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log('response', JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri
        });
      }
    });
  }  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.resourcePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.resourcePath.uri }}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.resourcePath.uri}
          </Text>

          <TouchableOpacity onPress={this.selectFile} style={styles.button}  >
              <Text style={styles.buttonText}>Select File</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.cameraLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Camera Directly</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.imageGalleryLaunch} style={styles.button}  >
              <Text style={styles.buttonText}>Launch Image Gallery Directly</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom:12    
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff'
  }
});
*/

import React, { Component } from 'react';
import { Text, View, StatusBar, Button, StyleSheet, ScrollView } from 'react-native';
import Colors from '@styles/Colors'
import { db } from '@src/config';
import ItemComponent from '@components/ItemComponent';
import { mainStyles, registroStyles } from '@styles/General'
import * as firebase from 'firebase'
import { LogBox } from 'react-native';



var uid, refi, itemsRef;

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("-------si" + user.uid);
      // User logged in already or has just logged in.
      uid = user.uid;
      refi = '/items/' + uid

      chargeRecetas();
    } else {
      console.log("--------no");
      // User not logged in or has just logged out.
    }
  });


  function chargeRecetas(){
    console.log(refi);

    itemsRef = db.ref(refi);
  }

  export default class ListItem extends Component {
    state = {
      items: []
    };
    componentDidMount() {
      itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);
        this.setState({ items });
      });
    }
    render() {
      return (
        <ScrollView
          keyboardDismissMode='on-drag'
          keyboardShouldPersistTaps='always'
          style={{ backgroundColor: Colors.WHITE }}>
          <View style={[{ padding: 50 }]}>
            <StatusBar
              backgroundColor={Colors.ICONCOLOR}
              barStyle='dark-content'
              translucent={true}
            />
            {this.state.items.length > 0 ? (
              <ItemComponent items={this.state.items} />
            ) : (
              <Text>No items</Text>
            )}
          </View>
        </ScrollView>
      );
    }
  }