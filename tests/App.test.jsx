import { describe, it, expect } from 'vitest';
import Shop from '/src/routes/Shop.jsx';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProvider } from './test-utils.jsx'

//Test the rendering of the shop page
test('check if running', ()=> {
  expect(true).toBe(true);
  
});


describe('Testing Shop Page', () => {
  renderWithProvider(<Shop />)
  
test('renders shop page', async () => {
  renderWithProvider(<Shop />)
  
});
test('Increment by one on button click', async () => {
  renderWithProvider(<Shop />)
  
  //(1) Make array of buttons using getAllByRole
  const buttons = await screen.findAllByTestId('plus');
  //(2) Click each button in order
  for (const button of buttons) {
    await userEvent.click(button);
  };
  //(3) Make array of <span> values useing getAllByRole
  const spanVals = await screen.findAllByTestId('itemValue');
  //(4) Test each span val increased from 0 to 1
  const values = spanVals.map(item => item.innerHTML);
  expect(values).not.toContain('0');
})
})