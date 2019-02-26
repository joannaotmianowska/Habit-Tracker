import React, { Component } from 'react';
import base from '../../base';
import HabitsList from './HabitsList/HabitsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {},
      owner: this.props.userId,
      isNewHabitFormShown: false,
      isSuccessModalShown: false,
      isEditHabitFormShown: false
    }

    this.showNewHabitForm = this.showNewHabitForm.bind(this);
    this.closeNewHabitForm = this.closeNewHabitForm.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
    this.showEditHabitForm = this.showEditHabitForm.bind(this)
    this.closeEditHabitForm = this.closeEditHabitForm.bind(this);
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

  showNewHabitForm() {
    this.setState({ isNewHabitFormShown: true });
  }

  closeNewHabitForm() {
    this.setState({ isNewHabitFormShown: false });
  }

  showSuccessModal() {
    this.setState({ isSuccessModalShown: true });
  }

  closeSuccessModal() {
    this.setState({ isSuccessModalShown: false });
  }

  showEditHabitForm() {
    this.setState({ isEditHabitFormShown: true });
  }

  closeEditHabitForm() {
    this.setState({ isEditHabitFormShown: false });
  }

  daysArrayForHabit(days) {
    let array = [];

    for(let i = 1; i <= days; i++) {
        array.push({ dayNo: i, marked: false });
    }

    return array;
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

  deleteHabit = habitKey => {
    const habits = { ...this.state.habits };
    habits[habitKey] = null;
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

        if (habitToUpdate.progress === habitToUpdate.duration) {
          habitToUpdate.completed = true;
          this.showSuccessModal();
        } else {
          habitToUpdate.completed = false;
        }

        this.updateHabit(habitKey, habitToUpdate);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        { this.props.userId === this.props.owner && this.props.logged
          ? <HabitsList
              addHabit={ this.addHabit }
              deleteHabit={ this.deleteHabit }
              updateHabit={ this.updateHabit }
              habits={ this.state.habits }
              daysArrayForHabit={ this.daysArrayForHabit }
              toggleDayAsMarked={ this.toggleDayAsMarked }
              showNewHabitForm={ this.showNewHabitForm }
              isNewHabitFormShown={ this.state.isNewHabitFormShown }
              closeNewHabitForm={ this.closeNewHabitForm }
              updateHabit={ this.updateHabit }
              isSuccessModalShown = { this.state.isSuccessModalShown }
              closeSuccessModal = { this.closeSuccessModal }
              isEditHabitFormShown = { this.state.isEditHabitFormShown }
              showEditHabitForm = { this.showEditHabitForm }
              closeEditHabitForm = { this.closeEditHabitForm }
          />
          : <div>Log in to see the dashboard</div>
        }
      </React.Fragment>
    );
  }
}

export default Dashboard;
