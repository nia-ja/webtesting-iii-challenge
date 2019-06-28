// Test away!

// ### Display Component
// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('matches snapshot', () => {
      const tree = renderer.create(<Display />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });
});