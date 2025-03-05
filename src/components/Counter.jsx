import { createContext, useState} from 'react';

export const CountContext = createContext();

export function CountProvider ( { props }) {
    const [total, setTotal] = useState(0);

    return (
        <CountContext.Provider value={ {total, setTotal }}>
            {props}
        </CountContext.Provider>

    )
};