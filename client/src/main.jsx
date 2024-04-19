import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import ListProvider from './ListContext.jsx'
import ItemListing from './ItemContext'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ListProvider>
            <ItemListing>
                <App />
            </ItemListing>
        </ListProvider>
    </BrowserRouter>
)
