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
        const changedMarkedInState = !this.state.marked;
        
        this.props.changeProgress(changedMarkedInState === true ? "up" : "down");
        this.setState({ marked: changedMarkedInState });
    }

    render() {
        return <div
            className={ `${ styles.day } ${ this.state.marked ? styles.marked : styles.notMarked }` }
            onClick={ this.toggleMarked }
        />

    }
}

export default SingleDay;
