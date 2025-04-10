import  {Config} from '@jest/types';


const config : Config.InitialOptions= {
  preset : 'ts-jest',
  testEnvironment : 'node',
  roots : ['<rootDir>/tests'],
  testMatch : ['**/*.test.ts'],
  verbose : true,
  collectCoverage : true,
  collectCoverageFrom : ['src/**/*.ts'],
  coverageDirectory :  'coverage',
coverageThreshold : {
  global: {
    
    functions: 85,
    statements: 75,
  }}
  
}
export default config;