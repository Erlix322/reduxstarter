import React, {Component} from 'react';
import List from '../containers/UserList'

class App extends Component {
    render() {
        return (
            <div>
                <h1>ReduxStarter</h1>
                <hr />
                <h2>Detail</h2>
                <List />
            </div>
        );
    }
}

export default App;