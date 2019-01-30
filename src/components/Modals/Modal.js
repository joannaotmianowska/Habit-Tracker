import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
        super(props);

        this.el = document.createElement('div');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            <div className={styles.modal}>ABC ABC ABC
            <button onClick={this.props.closeModal}>Close</button>
            </div>,
            this.el
        )
    }
}

export default Modal;
