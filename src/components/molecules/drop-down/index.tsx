import * as React from 'react';
import { ReactElement, useRef, useState, useLayoutEffect } from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Animated,
  Easing
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../res/colors';

type dataItem = {
  name: string; value: string
}
interface DropdownProps {
  defaultSelected: dataItem
  placeholder: string;
  data: dataItem[];
  onSelect: (item: { name: string; value: string }) => void;
  children?: React.ReactNode;
}

const Dropdown = (props: DropdownProps, {...rest}) => {
  const DropdownButton = useRef(undefined);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(props.defaultSelected || null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const animation = useState(new Animated.Value(0))[0];

  useLayoutEffect(() => {
    animation.setValue(0);
    Animated.timing(animation, {
      toValue: visible ? 1 : 0,
      useNativeDriver: true,
      duration: 300,
      easing: Easing.linear,
    }).start();
  }, [visible])

  const IconRotationAngle = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"]
  });

  const toggleDropdown = (): void => {
    openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((fx: number, fy: number, w: number, h: number, px: number, py: number) => {
      setDropdownTop(py + h);
      setVisible(true);
    });
  };

  const onItemPress = (item: dataItem): void => {
    setSelected(item);
    props.onSelect(item)
    setVisible(false);
  };

  const renderItem = ({ item }: { item: dataItem }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={styles.itemlabel}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType='none'>
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={props.data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
      {...rest}
    >
      {visible && renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.name) || props.placeholder}
      </Text>
      <Animated.View style={[styles.icon, {transform: [{ rotate: IconRotationAngle }]}]}>
        <Icon name="chevron-down" size={20} color={colors.JOLOCOM_GRAY_TEXT}></Icon>
      </Animated.View>

    </TouchableOpacity>
  );
};

export { Dropdown };