import * as React from "react";
import { View, Text } from "react-native";
import { IconImage, IconSets } from "../../../components/atoms";
import { PrimaryButton } from "../../../components/atoms";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigators/routes';
import colors from "../../../res/colors";
import { Dropdown } from "../../../components/molecules/drop-down";
import Strings from "../../../res/i18n";
import styles from "./styles";
import { setLanguage } from '../../../store/app-settings/actions';
// import { languageName } from '../../../store/app-settings/selectors';
import { StoreState } from "../../../store/storeState"

const SelectLanguagePage = () => {
    const defaultLanguageFromStore = useSelector((state:StoreState) => state.languageReducer)
    Strings.setLanguage(defaultLanguageFromStore.value || 'en')
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const dispatch = useDispatch();

    const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLanguageFromStore);


  
    React.useLayoutEffect(() => {
        if (selectedLanguage !==null) {
            setSelectedLanguage(selectedLanguage);
        }
       
    }, [selectedLanguage]);
    return (
        <View style={styles.container}>
            <IconImage iconStyle={{ marginTop: 30 }} size={130} name={'logoWhite'} iconSet={IconSets.LOCAL_ICON} />
            <Text style={styles.mainTitle}>{Strings.assessmentInfo}</Text>

            <Text style={styles.titleText}>{Strings.selectYourLanguage}</Text>
            <Dropdown
                defaultSelected={defaultLanguageFromStore}
                placeholder={Strings.selectYourLanguage}
                data={[{ name: 'German - (DE) ', value: 'de' },{ name: 'English - (US)', value: 'en' }, // TODO: Read from json file
                { name: 'English - (UK)', value: 'en' }]}
                onSelect={(item: { name: string; value: string }) => setSelectedLanguage(item)}
            >
            </Dropdown>
            <PrimaryButton
                title={Strings.continue}
                onPress={() =>{
                    dispatch(setLanguage(selectedLanguage));
                    navigation.navigate(Routes.ENTER_EMAIL_SCREEN, {});
                }
                }
                style={styles.continueButton}
                titleStyle={{ color: colors.JOLOCOM_PRIMARY }}
            />
        </View>
    );
};

export default SelectLanguagePage;