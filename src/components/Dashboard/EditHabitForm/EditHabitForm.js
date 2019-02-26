import React, { Component } from 'react';
import styles from '../AddHabitForm/AddHabitForm.module.scss';

class EditHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.durationRef = React.createRef();
        this.editHabit = this.editHabit.bind(this);
        this.saveAndClose = this.saveAndClose.bind(this);
    }

    editHabit(e) {
        const duration = parseInt(this.durationRef.current.value);

        const editedHabit = {
            name: this.nameRef.current.value,
            duration,
            days: this.props.daysArrayForHabit(duration)
        }

        this.props.updateHabit(this.props.habitKey, editedHabit);
    }

    saveAndClose(e) {
        e.preventDefault();
        this.editHabit();
        this.props.closeEditHabitForm();
    }

    render() {
        console.log('render', this.props.habitKey);
        return (
            <form className={ styles.addHabitForm } onSubmit={ this.saveAndClose }>
                <h3 className={ styles.formHeader }>Edit your habit</h3>
                <div className={ styles.question }>
                    <p>Habit name</p>
                    <input
                        name="name"
                        ref={ this.nameRef }
                        type="text"
                        onChange={ this.editHabit }
                        value={ this.props.habitDetails.name }
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
                        min="1"
                        max="42"
                        onChange={ this.editHabit }
                        value={ this.props.habitDetails.duration }
                        required/>
                </div>
                <button className={ styles.button } type="submit">Submit</button>
            </form>
        )
    }
}

export default EditHabitForm;