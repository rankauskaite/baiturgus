/**
 * @jest-environment jsdom
 */

import React, { useRef } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { useOnClickOutside } from '../../../src/hooks/use-on-click-outside';

describe('useOnClickOutside', () => {
    // Test to check if the handler is called when clicking outside the element
    it('calls handler when clicking outside the referenced element', () => {
      const handler = jest.fn();
      const TestComponent = () => {
        const ref = useRef();
        useOnClickOutside(ref, handler);
        return <div>
          <div ref={ref} data-testid="inside">Inside</div>
          <div data-testid="outside">Outside</div>
        </div>;
      };
  
      render(<TestComponent />);
      fireEvent.mouseDown(screen.getByTestId('outside')); // Simulate click outside
      expect(handler).toHaveBeenCalled(); // Handler should be called
    });
  
    // Test to check if the handler is not called when clicking inside the element
    it('does not call handler when clicking inside the referenced element', () => {
      const handler = jest.fn();
      const TestComponent = () => {
        const ref = useRef();
        useOnClickOutside(ref, handler);
        return <div ref={ref} data-testid="inside">Inside</div>;
      };
  
      render(<TestComponent />);
      fireEvent.mouseDown(screen.getByTestId('inside')); // Simulate click inside
      expect(handler).not.toHaveBeenCalled(); // Handler should not be called
    });
  });