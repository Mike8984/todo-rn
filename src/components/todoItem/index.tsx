import {FC, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Todo} from '../../types';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';

type Props = {
  post: Todo;
  onRemove: (id: string) => void;
};

const TodoItem: FC<Props> = ({todo, onRemove}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onLongPress={onRemove}>
      <View>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </View>
      <View>
        <Text style={styles.title}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
