import React from 'react';
import ReactDOM from 'react-dom';
import Example from './components/Example';

const App = () => {
    return (
        <div>
            <h1>Welcome to SaaScript</h1>
            <Example />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));