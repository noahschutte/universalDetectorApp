
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Slider,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

const beep = new Sound('beep6.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    // console.log('failed to load the sound', error);
    return;
  }
});

export default class App extends Component<{}> {
  play = () => {
    beep.play(success => {
      if (success) {
        // console.log('successfully finished playing');
      } else {
        // console.log('playback failed due to audio decoding errors');
        beep.reset();
      }
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.settingsBar}>
          <Icon.Button
            name='cog'
            color='grey'
            backgroundColor='rgba(0,0,0,0)'
            size={25}
            onPress={null}
          />
        </View>

        <View style={styles.detectorTextWrapper}>
          <Text style={styles.detectorText}>
            Universal Detector!
          </Text>
        </View>

        <View style={styles.sliderWrapper}>
          <Slider
            style={styles.slider}
            minimumValue={0.5}
            maximumValue={100}
            onValueChange={this.play}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  detectorText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  detectorTextWrapper: {
    flex: 7,
    justifyContent: 'center',
  },
  settingsBar: {
    flex: 1,
    alignSelf: 'flex-end',
    margin: 5,
  },
  sliderWrapper: {
    flex: 1,
  },
  slider: {
    width: Dimensions.get('window').width,
  },
});
