import React, { Component } from 'react'
import Recipe from './component/Recipe'
import "./App.css"

const URL = "https://dummyjson.com"


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        tags: [],
        selTag: '',
        recipes: []
      }
    }

    componentDidMount() {
      fetch('https://dummyjson.com/recipes/tags')
      .then(res => res.json())
      .then(res => {
        console.log(`tags =,` ,res)
        this.setState({
          tags: res
        })
      }).catch(err => console.log(err));

      fetch(`${URL}/recipes`)
      .then(res => res.json())
      .then(res => {
          console.log(`data =`, res)
          this.setState({
              recipes: res.recipes
          })
      }).catch(err => console.log(err))
    }


    tagHandler(val) {
      console.log(`selected tag =`, val)
      this.setState({
          selTag: val
      })
      fetch(`https://dummyjson.com/recipes/tag/${val}`)
      .then(res => res.json())
      .then(res => {
        console.log(`recipes =`, res)
        this.setState({
            recipes: res.recipes
        })
      }).catch(err => console.log(err));
    }

    render() {
      return (
        <div className="container">
            <div className="title">
                <h3>Our Recipes</h3>
                <div className="form-input">
                    <label htmlFor="tag">Select by Tag</label>
                    <select name="tag" id="tag" className="form-item" value={this.state.selTag} onChange={(e) => this.tagHandler(e.target.value)} >
                         <option value={null} >Choose Recipe Tags</option>
                         {
                            this.state.tags?.map((item,index) => {
                              return(
                                <option value={item} key={index}>  {item} </option>
                              )
                            })
                         }
                    </select>
                </div>
            </div>

            <Recipe recipes={this.state.recipes} />
        </div>
      )
    }
}

export default App