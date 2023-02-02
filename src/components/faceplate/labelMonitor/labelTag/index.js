import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import './label_tag.css'

const LabelTag = (props) => {
    return (
        <div className='label-tag'>{props.tag}</div>
    )
}

export default LabelTag