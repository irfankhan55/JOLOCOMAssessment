import * as React from "react";
import {
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Routes from '../../../navigators/routes';
import { IconImage, IconSets, PrimaryButton } from "../../../components/atoms";
import { SwipeableListItem } from "../../../components/molecules";
import styles from "./styles";
import Strings from "../../../res/i18n";
import { useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";


const TITLES = [
  'Open source solutions for people and organizations',
  'Develop custom solutions with our support 👍🏼',
  'Off the shelf integration',
  'Onboard your users with SSI',
  'Issue and manage credentials with the Jolocom Agent',
];


interface TaskInterface {
  title: string;
  index: number;
}

const UserSubmissionPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const dispatch = useDispatch();
  const TASKS: TaskInterface[] = TITLES.map((title, index) => ({ title, index }));
  const [tasks, setTasks] = React.useState(TASKS);

  const onDismiss = React.useCallback((task: TaskInterface) => {
    setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
  }, []);

  const scrollRef = React.useRef(null);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title: Strings.submitButtonText })
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {tasks.map((task) => (
          <SwipeableListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
             <PrimaryButton
        disabled={false}
        title={Strings.startOver}
        onPress={() => navigation.goBack()}
        style={styles.startOverButton}
      />
      <PrimaryButton
        disabled={false}
        title={Strings.continue}
        onPress={() => navigation.navigate(Routes.SELECT_COUNTRY_SCREEN)}
        style={styles.continueButton}
      />
      </ScrollView>

      
 
    </SafeAreaView>


  );
};
export default UserSubmissionPage;