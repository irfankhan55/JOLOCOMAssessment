# JOLOCOM ASSESSMENT: 
[Typescript | Hooks() | Redux | Redux-persit | Localization with Redux | Unit Testing "jest" | CustomNavigators, SideMenu]

# Following features are developed.

1) [BONUS] Localization (Multi-lingual) based on the selected language. (en, ge) English and German for now. (Stored in redux-persist)
2) UI by using functional components and hooks.
3) [BONUS] : UserInfo form validation and scroll up focused input. (CustomKeyboardAvoidingView)
4) [BONUS] Redux state management.
5) [BONUS]Redux-persist (language, email, country, and user).
6) [BONUS] Routers Navigation based on user status isUserLoggedIn ? MainApp : Authentication.
7) [BONUS] Country picker component
8) [BONUS] Dashboard and side menu after demo login.
9) [BONUS] UnitTesting, UI Testing (Snapshot)
10) The project is working on both iOS and Android (procedure is documented)

<div>

<img src="https://user-images.githubusercontent.com/46451157/189531057-4b6fe26f-0311-4490-aa76-5618825f89d6.png" width="150" height="300"/>
<img src="https://user-images.githubusercontent.com/46451157/189531060-2685ea0d-beac-48d4-805f-7d813b3d27ac.png" width="150" height="300"/>
<img src="https://user-images.githubusercontent.com/46451157/189531062-e6695d8e-2808-4f3b-a21f-1c786ef0b26f.png" width="150" height="300"/>
<img src="https://user-images.githubusercontent.com/46451157/189531063-7952b5e8-3f57-4914-ab1b-79ba3a030048.png" width="150" height="300"/>
<img src="https://user-images.githubusercontent.com/46451157/189531064-34c68a95-d53c-4584-9886-1e51654cba3d.png" width="150" height="300"/>

<img src="https://user-images.githubusercontent.com/46451157/174150111-e4aa49e4-978c-4046-abbf-b3239db79379.png" width="150" height="300"/>
<img src="https://user-images.githubusercontent.com/46451157/174150131-04f59b3a-04fd-4b10-ade6-a15146bc4e4b.png" width="150" height="300"/>
</dive>


# Prerequisite: 
1) Node Version : v16.15.1
2) NPM Version : 8.11.0
3) react-native-cli : 2.0.1
4) react-native : 0.68.0

# Run on iOS (ios-dev): 
Please follow the below procedure to run the project on iOS. 
This project is developed and compiled on iOS 15.5

1) clone repository
2) Please delete the yarn.lock and package-lock.json before running clear cache as well by # (npm run reset-cache)
3) cd to JOLOCOM ASSESSNENT
4) yarn or npm install
5) cd ios
6) pod install
7) cd ..
8) npm run ios-dev
9) You can run the project directly in xCode by running Opening "JOLOCOMAssessment.xcworkspace" in iOS folder.

# Run on Android (android-dev):
Please follow the below procedure to run the project on android

1) clone repository
2) Please edit local.properties file in Android folder. (sdk.dir = /Users/irfankhan/Library/Android/sdk) to your skd path
3) cd to JOLOCOM ASSESSNENT
4) yarn or npm install
5  npm run android-dev

# Run Tests (npm test): 
Please follow the below procedure to test the project. 
there are 5 tests in total.

1) goto "_test_" folder in "src" directory
2) delete "_snapshots_" from "ui-tests" folder
3) npm test


Thank you for your time, if you face any issues in compiling the project
Please don't hesitate to send an email at irfank480@gmail.com

Irfan Khan




