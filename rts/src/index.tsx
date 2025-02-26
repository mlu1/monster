import ReactDom from 'react-dom';
import React from 'react'
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {GuestList} from './state/GuestList.tsx';
import {UserSearch} from './state/UserSearch.tsx';

const App = ()=>{
    return (
        <div>
            <GuestList/>
            <UserSearch/>
        </div>
    )
};
const rootElement  = document.getElementById('root')
const root = createRoot(rootElement!);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)