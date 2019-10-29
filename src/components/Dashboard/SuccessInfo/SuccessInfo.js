import React, { Component } from 'react';
import styles from './SuccessInfo.module.scss';
import successsImage from '../../../images/undraw_finish_line.svg';

class SuccessInfo extends Component {

    // to do - use NewHabitButton component here

    constructor(props) {
        super(props);

        this.redirectToNewHabitForm = this.redirectToNewHabitForm.bind(this);
    }

    redirectToNewHabitForm() {
        this.props.closeSuccessModal();
        this.props.showNewHabitForm();
    }

    render() {
        return (
            <div className={ styles.successInfo }>
                <img src={ successsImage } alt='finish line image'/>
                <p>You have successfully developed a new habit.</p>
                <p>Congratulations!</p>
                <button className={ styles.button } onClick={ this.redirectToNewHabitForm }>Start new habit</button>
            </div>
        );
    }
}

export default SuccessInfo;