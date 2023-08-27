// jest.config.js
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: [
    "./src/config.ts"
  ],
  extensionsToTreatAsEsm: ['.ts'], // Treat TypeScript files as ESM
  globals: {
    'ts-jest': {
      useESM: true, // Use ESM for tests
    },
    "compiler": "ttypescript"

  },
  testPathIgnorePatterns: ['build/Tests/'],
  transform: {
    ".(ts|tsx)": "ts-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        "compiler": "ttypescript"
      }
    ]
  }
};
