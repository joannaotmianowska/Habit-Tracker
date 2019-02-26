import React, { Component } from 'react';
import styles from './AddHabitForm.module.scss';

class AddHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.durationRef = React.createRef();
        this.createHabit = this.createHabit.bind(this);
        this.daysArrayForHabit = this.daysArrayForHabit.bind(this);
    }

    createHabit(e) {
        e.preventDefault();

        const duration = parseInt(this.durationRef.current.value);

        const habit = {
            name: this.nameRef.current.value,
            duration,
            completed: false,
            progress: 0,
            days: this.props.daysArrayForHabit(duration)
        }

        this.props.addHabit(habit);
        this.props.closeNewHabitForm();
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className={ styles.addHabitForm } onSubmit={ this.createHabit }>
                <h3 className={ styles.formHeader }>Add new habit</h3>
                <div className={ styles.question }>
                    <p>What habit do you want to work on?</p>
                    <input
                        name="name"
                        ref={ this.nameRef }
                        type="text"
                        placeholder="e.g. reading every evening"
                        required
                    />
                </div>
                <div className={ styles.question }>
                    <p>How many days do you want to work on your habit?</p>
                    <p className={ styles.additionalInfo }>Recommended duration is between 7 to 42 days</p>
                    <input
                        name="duration"
                        ref={ this.durationRef }
                        type="number"
                        min="1"
                        max="42"
                        required/>
                </div>
                <button className={ styles.button } type="submit">Submit</button>
            </form>
        )
    }
}

export default AddHabitForm;
