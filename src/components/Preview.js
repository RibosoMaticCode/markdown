import React from 'react'

export default function Preview(props) {
    return (
        <div className='card markdown mb-5'>
            <div className='card-header'>
                <i className="fas fa-search"></i> Preview
            </div>
            <div className="card-body">
                {/* 
                    dangerouslySetInnerHTML es el reemplazo de React para usar innerHTMLen el navegador DOM 
                    puede configurar HTML directamente desde React, pero debe escribir dangerouslySetInnerHTML
                    y pasar un objeto con una __htmlclave para recordarse a sí mismo que es peligroso.
                */}
                <div id="preview" dangerouslySetInnerHTML={{
                    __html: props.contentPreview
                }} />
            </div>
        </div>
    )
}
