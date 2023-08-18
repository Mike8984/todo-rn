import {useState} from 'react';
import {
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import Sidebar from './src/components/sidebar';
import TodoItem from './src/components/todoItem';
import TodoForm from './src/components/todoForm';
import Plus from 'react-native-vector-icons/AntDesign';
import {Todo} from './src/types';

const App = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const createTodo = (title: string) => {
    if (value.trim()) {
      setTodos([
        ...todos,
        {id: Date.now().toString(), title, isCompleted: false},
      ]);
      setValue('');
      setIsOpen(false);
    } else {
      Alert.alert('You did not enter a task title');
    }
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <Sidebar heading="Todolist" />
      <View style={styles.container}>
        <TouchableOpacity
          style={{alignSelf: 'center', marginBottom: 20}}
          onPress={toggleModal}>
          <Plus name="plussquareo" size={50} color={'blue'} />
        </TouchableOpacity>

        <Modal
          animationType="slide"
          visible={isOpen}
          onRequestClose={toggleModal}>
          <TodoForm
            value={value}
            setValue={setValue}
            createTodo={createTodo}
            onToggle={toggleModal}
          />
        </Modal>
        <View>
          <FlatList
            data={todos}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TodoItem todo={item} onRemove={() => removeTodo(item.id)} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 40,
  },
});
