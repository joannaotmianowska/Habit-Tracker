import React, { Component } from 'react';
import styles from './HabitsList.module.scss';
import SingleHabit from '../SingleHabit/SingleHabit';
import AddFormHabit from '../AddHabitForm/AddHabitForm';
import SuccessInfo from '../SuccessInfo/SuccessInfo';
import Modal from '../../Modals/Modal';

class HabitsList extends Component {

    render() {
        return (
            <div className={ styles.dashboard }>
                <div className={ styles.listHeader }>
                    <h3 className={ styles.header }>Ongoing habits</h3>
                    <button
                        className={ styles.newHabit }
                        onClick={ this.props.showNewHabitForm }>
                        Add new habit
                    </button>
                </div>
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
                    { Object.keys(this.props.habits).length === 0
                        ? (<h4 className={ styles.addNewInfo }>Add new habits to start tracking them!</h4>)
                        : ( Object.keys(this.props.habits).map(key =>
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
