import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';

let container: HTMLElement;

beforeEach(() => {
    container = document.createElement('div');
    container.setAttribute('id', 'root');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
});

describe('index.js', () => {
    it('should render App component', () => {
        ReactDOM.createRoot(container).render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        );
        expect(container.getAttribute('id')).toContain('root');
    });
});