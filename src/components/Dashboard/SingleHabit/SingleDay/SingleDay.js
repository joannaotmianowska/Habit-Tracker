import React, { Component } from 'react';
import styles from './SingleDay.module.scss';

class SingleDay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marked: false
        }

        this.toggleMarked = this.toggleMarked.bind(this);
    }

    toggleMarked() {
        this.props.toggleDayAsMarked(this.props.habitKey, this.props.dayNo);
    }

    render() {
        return <div
            className={ `${ styles.day } ${ this.props.marked ? styles.marked : styles.notMarked }` }
            onClick={ this.toggleMarked }
        />

    }
}

export default SingleDay;
