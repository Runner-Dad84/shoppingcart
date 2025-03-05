import { createContext, useState} from 'react';

export const CountContext = createContext();

export function CountProvider ( { children }) {
    const [total, setTotal] = useState(0);

    return (
        <CountContext.Provider value={ {total, setTotal }}>
            {children}
        </CountContext.Provider>

    )
};