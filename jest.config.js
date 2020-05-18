module.exports = {
    verbose: true,
    preset: "jest-expo",
    setupFilesAfterEnv: ["./setup-tests.ts"],
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.jest.json",
            diagnostics: false,
            removeComments: true
        }
    },
    reporters: [
        "default",
        [
            "./node_modules/jest-html-reporter",
            {
                pageTitle: "Test Report",
                statusIgnoreFilter: "passed",
                includeFailureMsg: true,
                includeConsoleLog: false,
                outputPath: "./coverage/test-report.html"
            }
        ]
    ],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)"
    ],
    coverageReporters: ["text", "html", "lcov", "json"],
    automock: false,
    collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/", "!<rootDir>/coverage/"],
    coveragePathIgnorePatterns: ["/node_modules/"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    setupFiles: [],
    transform: {
        "^.+\\.js$": "babel-jest",
        "^.+\\.(jsx?)$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
        "^.+\\.ts$": "ts-jest",
        "^.+\\.(tsx?)$": "ts-jest"
    },
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
    testMatch: ["<rootDir>/__tests__/*.steps.js", "<rootDir>/__tests__/unit/*.unit.js"],
    setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js", "core-js"]
};
