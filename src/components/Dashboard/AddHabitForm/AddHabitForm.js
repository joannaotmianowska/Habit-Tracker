import React, { Component } from 'react';

class AddHabitForm extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.durationRef = React.createRef();
        this.createHabit = this.createHabit.bind(this);
        this.daysArrayForHabit = this.daysArrayForHabit.bind(this);
    }

    daysArrayForHabit(days) {
        let array = [];

        for(let i = 1; i <= days; i++) {
            array.push({ dayNo: i, marked: false });
        }

        return array;
    }

    createHabit(e) {
        e.preventDefault();

        const duration = parseInt(this.durationRef.current.value);

        const habit = {
            name: this.nameRef.current.value,
            duration,
            completed: false,
            progress: 0,
            days: this.daysArrayForHabit(duration)
        }

        this.props.closeModal();
        this.props.addHabit(habit);
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.createHabit}>
                <h3>Add new habit</h3>
                <input name="name" ref={this.nameRef} type="text" placeholder="Habit name" required/>
                <input name="duration" ref={this.durationRef} type="number" placeholder="Number of days" required/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default AddHabitForm;