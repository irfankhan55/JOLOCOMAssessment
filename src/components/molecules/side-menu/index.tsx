import * as React from 'react';
import { View, TouchableOpacity} from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import styles from './styles';
import { IconImage, IconSets } from '../../atoms';

type IconProps = { name: string; type: string };

type MenuItemProps = {
  isSelected: boolean;
  menuIcon: IconProps;
  onPress: () => void;
};

const MenuItem = ({ isSelected, menuIcon, onPress }: MenuItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.menuItem, isSelected ? styles.menuItemSelected : {}]}
      onPress={onPress}
    >
      
        <IconImage
          iconSet={menuIcon.type}
          size={50}
          color={'green'}
          name={menuIcon.name}
        />
     
    </TouchableOpacity>
  );
};

type MenuIconsMap = {
  [key: string]: IconProps;
};

const menuIconsMap: MenuIconsMap = {
  HomeScreen: {
    name: 'logo',
    type: IconSets.LOCAL_ICON
  },
  SettingsScreen: {
    name: 'check',
    type: IconSets.MATERIAL
  },
};
type SideMenuProps = DrawerContentComponentProps;

const SideMenu = (props: SideMenuProps) => {
  let selectedMenu = 'Dashboard';
  if (props && props.state && props.state.routes && props.state.index) {
    const selectedMenuName = props.state.routes[props.state.index].name;
    if (selectedMenuName) {
      selectedMenu = selectedMenuName;
    }
  }

  return (
    <View style={styles.box}>
      <View style={styles.menuContainer}>
        <View style={styles.menuItemsContainer}>  
          {props.state.routes.map(({ key, name }) => {
            return (
              <MenuItem
                onPress={() => {
                  props.navigation.navigate(name);
                }}
                key={key}
                menuIcon={menuIconsMap[name]}
                isSelected={selectedMenu === name}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};

export { SideMenu };
export type { SideMenuProps };
