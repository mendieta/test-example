module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["<rootDir>/test/setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/test/setupAfterEnv.ts"],
  moduleNameMapper: {
    "test/(.*)": "<rootDir>/test/$1",
    "~/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
}
