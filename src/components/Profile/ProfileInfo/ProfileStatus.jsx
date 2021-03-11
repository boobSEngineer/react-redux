import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateSetState = () => {
        this.setState( {
            editMode: true
        } );
    }
    deactivateSetState = () => {
        this.setState( {
            editMode: false
        } );
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateSetState}> {this.props.status || "-NAN STATUS-"} </span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateSetState} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }

}

export default ProfileStatus;