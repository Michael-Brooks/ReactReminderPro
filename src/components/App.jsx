import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions';

class App extends Component {
    constructor(props) {
        super();
        this.state = {
            text: '',
        }
    }

    handleAddReminder() {
        this.props.addReminder(this.state.text);
    }

    render() {
        return (
            <div className='app'>
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input type="text" className='form-control' placeholder='I have to...' onChange={event => this.setState({text: event.target.value})} />
                    </div>
                    <button onClick={ () => this.handleAddReminder() } type='button' className='btn btn-success' >Add Reminder</button>
                </div>
            </div>
        )
    }
}

export default connect(null, { addReminder })(App);