import React from 'react'

export default function Editor(props) {
    return (
        <div className='card markdown mb-5'>
            <div className="card-header">
                <i className="fas fa-pencil-alt"></i> Editor
            </div>
            <div className='card-body'>
                <textarea className='w-100 h-100' id="editor" onChange={props.onchange} value={props.contentEditor} />
            </div>
        </div>
    )
}
