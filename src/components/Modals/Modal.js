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
            <div className={ styles.modal }>
                { this.props.children }
            </div>,
            this.el
        )
    }
}

export default Modal;
