import React from 'react';
import expect from 'expect';
import { defineFeature, loadFeature } from 'jest-cucumber';
import { shallow, mount, render } from 'enzyme';
import App from '../app/App';

const feature = loadFeature('__tests__/App.feature');

defineFeature(feature, test => {
    test('App component', ({ given, when, then }) => {
        let container;
        given('Mount app component', () => {
            container = mount(<App />);
        });
        when('Launch app component', () => {
        });
        then('App should be shown', () => {
            expect(container.length).toBe(1);
        });
    });
});