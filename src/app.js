import './scss/app.scss';
import Header from './components/Header.js';

const app = () => {
    document.getElementById('header').innerHTML = Header();
};

app();