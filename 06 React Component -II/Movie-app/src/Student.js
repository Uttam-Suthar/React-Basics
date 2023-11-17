import React from "react";

// import { Component } from "react";

// class MovieCard extends Component {}

// class Student extends React.Component {

//     render() {
//         console.log(this.props)
//         // destructuerin
//         const {stuname,marks}=this.props
//         return (

//             <>
//                 {/* <h1>hello,{this.props.stuname} </h1>
//                 <p>You have secured {this.props.marks}%</p> */}
//                 <h1>hello,{stuname} </h1>
//                 <p>You have secured {marks}%</p>
//                 <hr/>
//             </>
//         );
//     }
// }

// function component pass props

function Student(props) {
    const {stuname,marks} = props
    return (
        <>
            {/* <h1>hello,{props.stuname} </h1>
            <p>You have secured {props.marks}%</p> */}
            <h1>hello,{stuname} </h1>
            <p>You have secured {marks}%</p>
            <hr />
        </>
    )
}

export default Student