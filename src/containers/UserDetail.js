import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'


class UserDetail extends Component {
    render() {
        return (
            <div>
                {this.props.user.detail}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser
    }
}




export default connect(mapStateToProps)(UserDetail);