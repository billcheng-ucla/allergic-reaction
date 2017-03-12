import React from 'react'
import RestaurantsCard from './RestaurantsCard.jsx'

export default class RestaurantsContainer extends React.Component {
    render() {
        return (
        <div className='col-md-10 col-md-offset-1' dangerouslySetInnerHTML={{__html: this.props.html}}>
        </div>
        )
    }
}