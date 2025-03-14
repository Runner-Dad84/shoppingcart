import { describe, it, expect } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Shop from '/src/routes/Shop.jsx';
import { CountProvider } from '/src/components/Counter.jsx'
import { render, screen } from '@testing-library/react';

test('renders shop page', async () => {
  render(
   <CountProvider>
    <MemoryRouter initialEntries={['/Shop']}>
      <Routes>
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </MemoryRouter>
    </CountProvider>
  );
}
);