module.exports = {
    preset: 'react-native',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    setupFiles: ['<rootDir>/jest/setup.js'],
    collectCoverage: false,
    coveragePathIgnorePatterns: ['/node_modules/', '/src/jest'],
    // // saves time, makes it easier to read.
    coverageReporters: ['text', 'text-summary'],
    moduleDirectories: ['node_modules', 'src'],
    // // reporters: ['default',  'jest-sonar'],
    transform: {
      '^.+\\.(ts|tsx|js|jsx)?$': '<rootDir>/node_modules/babel-jest',
    },    
    transformIgnorePatterns: [
      'node_modules/(?!(jest-|@react-native|@react-native-community|react-native))',
      'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
    ],
    
    "moduleNameMapper": {
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy"
    }
  };
  