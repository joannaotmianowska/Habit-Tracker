import React, { Component } from 'react';
import styles from './HabitsList.module.scss';
import NoHabitsView from './NoHabitsView/NoHabitsView';
import SingleHabit from '../SingleHabit/SingleHabit';
import AddFormHabit from '../AddHabitForm/AddHabitForm';
import SuccessInfo from '../SuccessInfo/SuccessInfo';
import Modal from '../../Modals/Modal';
import NewHabitButton from './NewHabitButton/NewHabitButton';

class HabitsList extends Component {

    render() {
        const listIsEmpty = Object.keys(this.props.habits).length === 0;

        return (
            <div className={ styles.dashboard }>
                { !listIsEmpty && <div className={ styles.listHeader }>
                    <h3 className={ styles.header }>Ongoing habits</h3>
                    <NewHabitButton
                        showNewHabitForm={ this.props.showNewHabitForm }
                    />
                </div> }
                <div className={ styles.list }>
                    { this.props.isNewHabitFormShown &&
                        <Modal
                            closeModal={ this.props.closeNewHabitForm }
                        >
                            <AddFormHabit
                                addHabit={ this.props.addHabit }
                                closeNewHabitForm={ this.props.closeNewHabitForm }
                            />
                        </Modal> }
                    { this.props.isSuccessModalShown &&
                        <Modal closeModal={ this.props.closeSuccessModal }>
                            <SuccessInfo
                                showNewHabitForm={ this.props.showNewHabitForm }
                                closeSuccessModal={ this.props.closeSuccessModal }
                            />
                        </Modal>
                    }
                    { listIsEmpty
                        ? (<NoHabitsView showNewHabitForm={ this.props.showNewHabitForm }/>)
                        : (
                            Object.keys(this.props.habits).map(key =>
                            <SingleHabit
                                key={ key }
                                habitDetails={ this.props.habits[key] }
                                index={ key }
                                toggleDayAsMarked={ this.props.toggleDayAsMarked }
                                deleteHabit={ this.props.deleteHabit }
                                updateHabit={ this.props.updateHabit }
                            />
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default HabitsList;
