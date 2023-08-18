import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    width: '80%',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#353535',
    borderRadius: 5,
    marginVertical: 10,
  },

  button: {
    width: '80%',
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10
  },

  buttonText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  }, 

  close: {
    position: 'absolute',
    top: 64,
    right: 32
  }, 

  
});

export default styles;
