import React, { Component } from 'react'
import Item from './Item'


export default class Recipe extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="recipe-container">
                {
                    this.props.recipes?.map((item,index) => {
                        return (
                            <Item key={index} {...item} />
                        )
                    })
                }
            </div>
        )
    }
}
