// // Javascript
// const heading = document.createElement("h2");
// heading.textContent = "Hello World"
// heading.className = "header"

// document.getElementById("root").append(heading)

// console.log("Javascript :", heading)


// React 

// const reactHeading = React.createElement("h1", { className: "" }, "Hello React!")
// // console.log("React lib :", reactHeading)
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading)

// react with jsx 

// const jsxtHeading = (<h1 className="head">Hello React jsx!</h1>)

// const jsxtHeading = <React.Fragment>
//                      <h1 className="head">Hello React jsx!</h1>
//                      <p>This is create using </p>
// </React.Fragment>

// fragment
// const jsxtHeading = <>
//     <h1 className="head">Hello React jsx!</h1>
//     <p>This is create using </p>
// </>

// // console.log("React lib :", reactHeading)
// ReactDOM.createRoot(document.getElementById("root")).render(jsxtHeading)

// component in react

// arrow function
// const Name= ()=>{
//     return (
//     <>
//         <p>JSX is Javascript XML</p>
//     </>
//     )
// }

const Name = () => (
    <>
        <p>JSX is Javascript XML</p>
    </>
)


function App() {
    return (
        <>
            <h1 className="head">Hello React jsx!</h1>
            <p>This is create using </p>
        </>
    )
}

// console.log("React lib :", reactHeading)
ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name /></>)