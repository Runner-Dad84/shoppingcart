import { CountProvider } from '/src/components/Counter.jsx';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import * as api from './api'

export function renderWithProvider (ui, options = {}) {
    const { route = '/', path = '/', contextValue = { value: { count: 0, setCount: () => {} }} } = options

    render(
        <CountProvider {...contextValue}>
         <MemoryRouter initialEntries={[route]}>
           <Routes>
             <Route path={path} element={ui} />
           </Routes>
         </MemoryRouter>
         </CountProvider>
       );
};