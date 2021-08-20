import React from 'react'
import {Route} from 'react-router-dom'
import News from '../News'

export default class CityList extends React.Component {
    render() {
        return (
            <div>
                Homepage
                <Route path="/home/news" component={News}></Route>
            </div>
        )
    }
}