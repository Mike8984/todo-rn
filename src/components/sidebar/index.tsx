import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

type Props = {
  heading: string;
};

const Sidebar: FC<Props> = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default Sidebar;
