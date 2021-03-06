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
            <div className={ styles.modalContainer }>
                <div className={ styles.modalArea }>
                    <div className={ styles.modalDetails }>
                        { this.props.children }
                    </div>
                    <div
                        className={ styles.closeIcon }
                        onClick={ this.props.closeModal }
                    >
                        X
                    </div>
                </div>
            </div>,
            this.el
        )
    }
}

export default Modal;
