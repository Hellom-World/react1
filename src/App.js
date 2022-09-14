import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';

import AppRoutes from './Routes';

export default function App() {
    
    return (
        <div className="wrapper">
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </div>
    );
}