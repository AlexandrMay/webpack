import React from 'react'
import $ from 'jquery'

export default class App extends React.Component{
componentDidMount(){

$('<h1 />')
.text('Hello from Jquery')
.css({
    textAlign: 'center',
    color: '#8b008b'
})
.appendTo($('header'))
}

    render(){
        return(
            <React.Fragment>
            <header></header>

            <hr />

            <div className="box">
            <h2 className="box-title">Box title</h2>
            <p className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nihil nemo modi porro quam tempora aliquid, quod explicabo animi necessitatibus vitae quos veritatis autem dignissimos eius sunt totam, incidunt beatae.</p>
            </div>
            </React.Fragment>
        )
    }
}