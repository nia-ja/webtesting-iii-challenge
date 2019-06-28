// Test away!

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />);
    });

    it('matches snapshot', () => {
      const tree = renderer.create(<Controls />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it("calls function when button clicked", () => {
        const toggleLocked = jest.fn();
        const toggleClosed = jest.fn();
    
        const props = {
            closed: true,
            locked: false,
            toggleLocked: toggleLocked,
            toggleClosed: toggleClosed
        }
        const { getByText } = render(<Controls {...props}/>);
        const toggleLockedBtn = getByText(/lock gate/i);
    
        fireEvent.click(toggleLockedBtn);
    
        expect(toggleLocked).toHaveBeenCalled();
    
        const toggleClosedBtn = getByText(/open gate/i);
    
        fireEvent.click(toggleClosedBtn);
    
        expect(toggleClosed).toHaveBeenCalled();
    });
});