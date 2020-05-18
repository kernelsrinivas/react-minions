// setup-tests.js
import "core-js";
import * as Enzyme from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import "jsdom-global/register";
import "react";
import "react-native";
import "jest-enzyme";
jest.setTimeout(50000);
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

/**
 * Ignore some expected warnings
 * see: https://jestjs.io/docs/en/tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16
 * see https://github.com/Root-App/react-native-mock-render/issues/6
 */
const originalConsoleError = console.error;
interface MessageProps {
    [key: string]: {} | [];
    startsWith: Function;
}
console.error = (message: MessageProps): void => {
    if (message.startsWith && message.startsWith("Warning:")) {
        return;
    }
    originalConsoleError(message);
};

require("jest-fetch-mock").enableMocks();
