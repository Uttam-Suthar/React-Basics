import React from "react";
// import { Component } from "react";

// class MovieCard extends Component {}

class MovieCard extends React.Component{
    constructor(){
        super()
        this.state={
            title:"The Avenger",
            plot:"Supernatural power show in movie",
            price:199,
            rating:8.9,
            stars:0
        }

        // this.addStar= this.addStar.bind(this)
    }

    // addStar(){
    //     console.log("this state",this.state)
    // }

    addStar=()=>{
        if (this.state.stars >=50) {
            return;
        }
        // this.state.stars += 0.5
        // console.log("this state", this.state.stars)
        // form
        // this.setState({
        //     stars: this.state.stars + 0.5

        // }, () => console.log("stars inside callback", this.state.stars))
        this.setState({
            stars:this.state.stars+0.5
        
        })
        this.setState({
            stars: this.state.stars + 0.5

        })
        this.setState({
            stars: this.state.stars + 0.5

        })
        this.setState({
            stars: this.state.stars + 0.5

        })

        console.log("stars:", this.state.stars)

        // form 2
        
        // this.setState((prevState)=>{
        //     return {
        //         stars:prevState.stars+0.5
        //     }
        // })

        
    }

    decStar = () => {
        // this.state.stars += 0.5
        // console.log("this state", this.state.stars)
        // 
        if(this.state.stars<=0){
            return;
        }
        this.setState({
            stars: this.state.stars - 0.5
        })
    }

    render() {
        // destruction 
        const {plot,price,rating,stars}= this.state
        return (
            //  <h2>Movie Cards</h2>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OI_LAKQA9cLi1u0p4B742v_CsaTG6cDbGw&usqp=CAU" />
                    </div>
                    
                    <div className="right">
                        <div className="title">{this.state.title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.decStar} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"  />
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" onClick={this.addStar}/>
                                <span>{stars}</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard