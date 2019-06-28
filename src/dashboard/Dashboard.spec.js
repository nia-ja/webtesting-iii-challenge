// ### Dashboard
// - shows the controls and display
// - defaults to `unlocked` and `open`

import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, getNodeText } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import "jest-dom/extend-expect";

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />); 
      expect(tree.toJSON()).toMatchSnapshot();
    });

    it("starts with gate unlocked and open", () => {
        const { getByTestId } = render(<Dashboard />);
        const lockStatus = getByTestId("lock-unlock");
        const openStatus = getByTestId("open-close");
    
        expect(getNodeText(lockStatus).toLowerCase()).toBe("unlocked");
        expect(getNodeText(openStatus).toLowerCase()).toBe("open");
    });
});