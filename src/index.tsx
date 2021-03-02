import React from 'react';
import ReactDOM from 'react-dom';
import Articles from './components/articles/Articles'

const App = props => (
    <div>
        <div>App from index.ts</div>
        <Articles/>
    </div>
)

ReactDOM.render(<App/>, document.getElementById('root'));
