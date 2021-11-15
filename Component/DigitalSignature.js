import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Text,
  Button,
} from 'react-native';
import SignatureScreen, {readSignature} from 'react-native-signature-canvas';

const Sign = ({text}) => {
  const [show, setShow] = useState(false);
  const ref = useRef();
  const showSignature = () => setShow(true);

  const handleEmpty = () => {
    console.log('Empty');
  };

  const handleOK = signature => {
    console.log('your signature is ' + signature);
    setShow(false);
    // onOK(signature); // Callback from Component props
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: 'hotpink',
          padding: 10,
          marginTop: 150,
          borderRadius: 15,
        }}
        onPress={showSignature}>
        <Text style={{color: 'white'}}>Show signature view</Text>
      </TouchableOpacity>
      {show && (
        <View style={{backgroundColor: 'red', position: 'relative'}}>
          <Modal animationType="slide" transparent={false}>
            <TouchableOpacity
              onPress={() => setShow(false)}
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                right: 0,
                position: 'absolute',
                zIndex: 11,
              }}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
            <SignatureScreen
              ref={ref}
              onOK={handleOK}
              onEmpty={handleEmpty}
              onEnd={handleEmpty}
              autoClear={false}
              descriptionText={text}
              backgroundColor="rgb(255,255,255)"
              penColor={'rgba(255,117,2,1)'}
              descriptionText="Your signature"
            />
          </Modal>
        </View>
      )}
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
});
