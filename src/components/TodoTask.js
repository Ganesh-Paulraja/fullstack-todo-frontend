import React from 'react'
import {Del, Edit} from './svg'

export default function TodoTask({text ="hi", updateMode, deleteToDo}) {
  return (
    <div className='gg-task-wrap'>
        <div className="gg-text">
            {text}
        </div>
        <div className="gg-icons">
            <a href="/" onClick={updateMode} className='gg-edit'>
                <Edit/>
            </a>
            <a href="/" onClick={deleteToDo} className='gg-del'>
              <Del/>
            </a>
        </div>
    </div>
  )
}
