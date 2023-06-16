module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/mocks/setupServer.ts","@testing-library/jest-dom/extend-expect"],
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/src/__mocks__/styleMock.ts",
    "^components/(.*)": "<rootDir>/src/components/$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.png$": "jest-transform-stub",
    "^.+\\.jpg$": "jest-transform-stub",
    "^.+\\.gif$": "jest-transform-stub",
    "^.+\\.svg$": "jest-transform-stub",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/src/__tests__/mocks",
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/src/index.tsx"],
  coveragePathIgnorePatterns: ["<rootDir>/src/__tests__/mocks"]
};
