import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput';

class Header extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    state = {
        html:undefined
    }

    componentDidMount() {
        this.setState({
            html:document.getElementsByTagName('html')[0]
        },()=>this.onWindowResize.call(this))
        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    onWindowResize () {
        const { html } = this.state
        const winWidth = window.innerWidth
        html.style.fontSize = 100 / 1920 * winWidth + 'px'
    }

    handleSave (text) {
        if (text.length !== 0) {
            this.props.addTodo(text)
        }
    }

    render() {
        return (
            <header className="header">
                <h1 id="title">TodoList Of Redux</h1>
                <TodoTextInput
                    newTodo
                    onSave={this.handleSave.bind(this)}
                    placeholder="需要做什么?"
                />
            </header>
        );
    }
}

export default Header