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
import Modal from 'react-native-modal';
import OptionsModal from './OptionsModal';

export default class App extends Component<{}> {
  state = {
    beep: 0,
    modalVisible: false,
    thingDetected: null,
  };
  beeps = {
    beep1: new Sound('beep1.mp3', Sound.MAIN_BUNDLE, null),
    beep2: new Sound('beep2.mp3', Sound.MAIN_BUNDLE, null),
    beep3: new Sound('beep3.mp3', Sound.MAIN_BUNDLE, null),
    beep4: new Sound('beep4.mp3', Sound.MAIN_BUNDLE, null),
    beep5: new Sound('beep5.mp3', Sound.MAIN_BUNDLE, null),
  }
  detectSpecify = (thingDetected) => {
    this.setState({ thingDetected });
  }
  detectionText = () => {
    if (!this.state.thingDetected) {
      return 'Universal Detector';
    } else if (this.state.beep === 5) {
      return `${this.state.thingDetected.toUpperCase()} DETECTED`;
    }
    return `Detecting ${this.state.thingDetected}...`;
  }
  play = (beep) => {
    this.stop();
    switch (beep) {
      case 1:
        this.beeps.beep1.setNumberOfLoops(-1);
        this.beeps.beep1.play();
        return;
      case 2:
        this.beeps.beep2.setNumberOfLoops(-1);
        this.beeps.beep2.play();
        return;
      case 3:
        this.beeps.beep3.setNumberOfLoops(-1);
        this.beeps.beep3.play();
        return;
      case 4:
        this.beeps.beep4.setNumberOfLoops(-1);
        this.beeps.beep4.play();
        return;
      case 5:
        this.beeps.beep5.setNumberOfLoops(-1);
        this.beeps.beep5.play();
        return;
      default:
        return;
    }
  }
  stop = () => {
    this.beeps.beep1.stop();
    this.beeps.beep2.stop();
    this.beeps.beep3.stop();
    this.beeps.beep4.stop();
    this.beeps.beep5.stop();
  }
  valueChange = (sliderValue) => {
    if (sliderValue === 0) {
      this.setState({ beep: 0 });
      this.stop();
      return;
    } else if (sliderValue === 4 && this.state.beep !== 5) {
      this.setState({ beep: 5 });
      this.play(5);
      return;
    } else if (sliderValue <= 1 && this.state.beep !== 1) {
      this.setState({ beep: 1});
      this.play(1);
      return;
    } else if (sliderValue <= 2 && sliderValue > 1 && this.state.beep !== 2) {
      this.setState({ beep: 2 });
      this.play(2);
    } else if (sliderValue <= 3 && sliderValue > 2 && this.state.beep !== 3) {
      this.setState({ beep: 3 });
      this.play(3);
    } else if (sliderValue < 4 && sliderValue > 3 && this.state.beep !== 4) {
      this.setState({ beep: 4 });
      this.play(4);
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <Modal isVisible={this.state.modalVisible}>
          <OptionsModal
            detectSpecify={this.detectSpecify}
            thingDetected={this.state.thingDetected}
            closeModal={() => this.setState({ modalVisible: false })}
          />
        </Modal>

        <View style={styles.settingsBar}>
          <Icon.Button
            name='cog'
            color='grey'
            backgroundColor='rgba(0,0,0,0)'
            size={25}
            onPress={() => this.setState({ modalVisible: true })}
          />
        </View>

        <View style={styles.detectorTextWrapper}>
          <Text style={styles.detectorText}>
            {this.detectionText()}
          </Text>
        </View>

        <View style={styles.sliderWrapper}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={4}
            onValueChange={this.valueChange}
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
