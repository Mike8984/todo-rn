import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {Dispatch, FC, SetStateAction} from 'react';
import Close from 'react-native-vector-icons/AntDesign';
import styles from './styles';

type Props = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  createTodo: (value: string) => void;
  onToggle: Dispatch<SetStateAction<boolean>>;
};

const TodoForm: FC<Props> = ({value, setValue, createTodo, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.close} onPress={onToggle}>
        <Close name="close" size={24} />
      </TouchableOpacity>
      <View style={styles.input}>
        <TextInput
          value={value}
          onChangeText={text => setValue(text)}
          placeholder="Enter the title of task"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => createTodo(value)}>
        <Text style={styles.buttonText}>create todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoForm;
