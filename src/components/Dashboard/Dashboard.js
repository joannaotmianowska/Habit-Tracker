import React, { Component } from 'react';
import base from '../../base';
import HabitsList from './HabitsList/HabitsList';
import Modal from '../Modals/Modal';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {},
      owner: this.props.userId,
      showModal: false
    }

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  showModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
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
        {/* <button onClick={ this.showModal }>Show modal</button> */}
        { this.state.showModal && <Modal closeModal={ this.closeModal } /> }
        { this.props.userId === this.props.owner && this.props.logged
          ? <HabitsList
            addHabit={ this.addHabit }
            deleteHabit={ this.deleteHabit }
            habits={ this.state.habits }
            toggleDayAsMarked={ this.toggleDayAsMarked }
          />
          : <div>Log in to see the dashboard</div>
      }
      </div>
    );
  }
}

export default Dashboard;
