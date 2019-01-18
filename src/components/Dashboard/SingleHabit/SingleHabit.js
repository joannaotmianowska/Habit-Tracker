import React, { Component } from 'react';

class SingleHabit extends Component {

    renderDays(days) {
    }

    render() {
        return (
            <div>
                <h5>{ this.props.habitDetails.name }</h5>
                { this.renderDays(this.props.habitDetails.duration )}
            </div>
        )
    }
}

export default SingleHabit;
