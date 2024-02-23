import React, { createContext, useState } from 'react';

export const UserData = createContext();

export const UserProvider = (props) => {
    const [user, setUser] = useState(null);

    return (
        <UserData.Provider value={[user, setUser]}>
            {props.children}
        </UserData.Provider>
    );
};
