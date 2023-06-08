import React from 'react';
import { create } from 'react-test-renderer';
//import App from './App';
import HomeScreen from "./screens/HomeScreen";

jest.mock('react-native');
jest.mock('@react-navigation/native-stack')


it('has 1 child', () => {
    const tree = create(<HomeScreen/>).toJSON();
    expect(tree.children.length).toBe(1);
});
  