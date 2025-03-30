import { useState } from "react";

export default function usePersistedState(stateKey, initialState) {
    const [state, setState] = useState(() => {
        // calculating initial state in function
        const persistedStateJson = localStorage.getItem(stateKey);
        if (!persistedStateJson) {
            return typeof initialState === 'function' ? initialState() : initialState;
        }

        const persistedStateData = JSON.parse(persistedStateJson);

        return persistedStateData;
    });

    const setPersistedState = (input) => {
        const data = typeof input === 'function' ? input(state) : input;
        
        // update local storage
        const persistedData = JSON.stringify(data);
        localStorage.setItem(stateKey, persistedData);

        // update the local state
        setState(data);
    }


    return [
        state,
        setPersistedState,
    ]
}