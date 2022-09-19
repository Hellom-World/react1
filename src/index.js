import  ReactDOM  from "react-dom";

import './styles/global.css';

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);
fetch('http://localhost:3001')
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error.message);
    })