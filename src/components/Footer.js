import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: '全部',
    [SHOW_ACTIVE]: '未完成',
    [SHOW_COMPLETED]:'完成'
}

class Footer extends Component {
    static propTypes = {
        completedCount: PropTypes.number.isRequired,
        activeCount: PropTypes.number.isRequired,
        filter: PropTypes.string.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
        onShow: PropTypes.func.isRequired,
        onAllTodo: PropTypes.func.isRequired,
        onInvert: PropTypes.func.isRequired,
    }

    renderTodoCount () {
        const { activeCount } = this.props

        return (
            <div className="todo-count">
                剩余<span style={{fontWeight:700,color:'red'}}>{activeCount || '0'}</span>个未完成
            </div>
        )
    }

    renderFilterLink (filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props;

        return (
            <a className={classnames({ selected: filter === selectedFilter })}
                style={{ cursor: 'pointer' }}
                onClick={() => onShow(filter)}
            >
                {title}
            </a>
        )
    }

    renderAllTodoButton () {
        const { activeCount, onAllTodo } = this.props;
        if(activeCount > 0){
            return (
                <button className="completed-all" onClick={onAllTodo} >完成所有</button>
            )
        }
    }

    renderInvertComplete () {
        const { onInvert } = this.props;
        return (
            <button className="invert-completed" onClick={onInvert} >反选</button>
        )
    }

    renderClearButton () {
        const { completedCount, onClearCompleted } = this.props;
        if(completedCount > 0){
            return (
                <button className="clear-completed" onClick={onClearCompleted}>清除所有完成</button>
            )
        }
    }

    render () {
        return (
            <footer className="footer">
                {this.renderTodoCount()}
                <ul className="filters">
                    {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter => <li key={filter}>{this.renderFilterLink(filter)}</li>)}
                </ul>
                {this.renderInvertComplete()}
                {this.renderAllTodoButton()}
                {this.renderClearButton()}
            </footer>
        )
    }
}

export default Footer