import React, { Component } from 'react';
import styles from '../AddHabitForm/AddHabitForm.module.scss';

class EditHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.durationRef = React.createRef();
    }

    editHabit(e) {
        e.preventDefault();

        const duration = parseInt(this.durationRef.current.value);

        const editedHabit = {
            name: this.nameRef.current.value,
            duration,
            days: this.daysArrayForHabit(duration)
        }

        this.props.updateHabit(editedHabit);
        this.props.closeEditHabitForm();
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className={ styles.addHabitForm } onSubmit={ this.createHabit }>
                <h3 className={ styles.formHeader }>Edit your habit</h3>
                <div className={ styles.question }>
                    <p>Habit name</p>
                    <input
                        name="name"
                        ref={ this.nameRef }
                        type="text"
                        placeholder={ this.props.habitDetails.name }
                        required
                    />
                </div>
                <div className={ styles.question }>
                    <p>Habit duration (in days)</p>
                    <p className={ styles.additionalInfo }>Recommended duration is between 7 to 42 days</p>
                    <input
                        name="duration"
                        ref={ this.durationRef }
                        type="number"
                        placeholder={ this.props.habitDetails.duration }
                        min="1"
                        max="42"
                        required/>
                </div>
                <button className={ styles.button } type="submit">Submit</button>
            </form>
        )
    }
}

export default EditHabitForm;