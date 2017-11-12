import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

const OptionsModal = ({ closeModal, detectSpecify }) => {
  return (
    <View style={styles.container} >

      <View style={styles.inputWrapper}>
        <View style={{ flex: 1 }}>
          <Text>Detecting: </Text>
        </View>
        <View style={{ flex: 2 }}>
          <TextInput
            onChangeText={detectSpecify}
            placeholder='farts'
            onEndEditing={closeModal}
            returnKeyType='done'
          />
        </View>
      </View>

      <View style={styles.modalButtons}>
        <TouchableOpacity style={styles.button} onPress={closeModal}>
          <Text style={styles.text} >Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={closeModal}>
          <Text style={styles.text} >Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.7)',
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 25,
    height: Dimensions.get('window').height - 25,
  },
  inputWrapper: {
    flex: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 25,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    overflow: 'hidden',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  }
};

export default OptionsModal;
