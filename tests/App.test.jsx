import { describe, it, expect } from 'vitest';
import Shop from '/src/routes/Shop.jsx';
import { render, screen } from '@testing-library/react';
//import UserEvent from '@testing-library/user-event';
import { renderWithProvider } from './test-utils.jsx'

//Test the rendering of the shop page
test('check if running', ()=> {
  expect(true).toBe(true);
  
});


test('renders shop page', async () => {
  
  renderWithProvider(<Shop />)
  screen.debug();
 
}
);

describe('Testing App Component', () => {
  test('Increment by one on button click', async () => {

})

})