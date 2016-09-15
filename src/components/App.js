import React, {Component} from 'react';
import List from '../containers/UserList'
import UserDetail from '../containers/UserDetail'
class App extends Component {
    render() {
        return (
            <div>
                <h1>ReduxStarter</h1>
                <hr />
                <h2>Detail</h2>
                <List />
                <UserDetail />
            </div>
        );
    }
}

export default App;