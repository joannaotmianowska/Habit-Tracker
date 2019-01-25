import React, { Component } from 'react';
import base from '../../base';
import HabitsList from './HabitsList/HabitsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {},
      owner: this.props.userId
    }
  }

  componentDidMount() {
    const { params } = this.props.match;


    this.ref = base.syncState(`${params.dashboardId}/habits`, {
      context: this,
      state: 'habits'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addHabit = habit => {
    const habits = { ...this.state.habits };
    habits[`habit${Date.now()}`] = habit;
    this.setState({ habits });
  }

  updateHabit = (habitKey, updatedHabit) => {
    const habits = { ...this.state.habits };
    habits[habitKey] = updatedHabit;
    this.setState({ habits });
}

  toggleDayAsMarked = (habitKey, dayNo) => {
    const habitToUpdate = this.state.habits[habitKey];

    habitToUpdate.days.map(day => {
      if (day.dayNo === dayNo) {
        day.marked = !day.marked;

        day.marked === true
          ? habitToUpdate.progress++
          : habitToUpdate.progress--;

        habitToUpdate.progress === habitToUpdate.duration
          ? habitToUpdate.completed = true
          : habitToUpdate.completed = false;

        this.updateHabit(habitKey, habitToUpdate);
      }
    });
  }

  render() {
    return (
      <div>
        <HabitsList
          addHabit={ this.addHabit }
          habits={ this.state.habits }
          toggleDayAsMarked={ this.toggleDayAsMarked }
        />
      </div>
    );
  }
}

export default Dashboard;
