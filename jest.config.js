export default {
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx'],
  moduleDirectories: ['src'],
  transform: {
    '^.+\\.js$': 'babel-jest', // Add babel-jest for JavaScript files
    '^.+\\.tsx?$': 'ts-jest', // Add ts-jest for TypeScript files
  },
  collectCoverage: true,
  coverageThreshold: {},
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};

