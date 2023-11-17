import React from "react";
// import { Component } from "react";

// class MovieCard extends Component {}

class MovieCard extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         title:"The Avenger",
    //         plot:"Supernatural power show in movie",
    //         price:199,
    //         rating:8.9,
    //         stars:0,
    //         fav:false,
    //         isInCart:false
    //     }

    //     // this.addStar= this.addStar.bind(this)
    // }

    // addStar(){
    //     console.log("this state",this.state)
    // }

    // addStar=()=>{
    //     if (this.state.stars >=50) {
    //         return;
    //     }
    //     // this.state.stars += 0.5
    //     // console.log("this state", this.state.stars)
    //     // form
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5

    //     // }, () => console.log("stars inside callback", this.state.stars))
    //     this.setState({
    //         stars:this.state.stars+0.5
        
    //     })
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5

    //     // })
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5

    //     // })
    //     // this.setState({
    //     //     stars: this.state.stars + 0.5

    //     // })

    //     console.log("stars:", this.state.stars)

    //     // form 2
        
    //     // this.setState((prevState)=>{
    //     //     return {
    //     //         stars:prevState.stars+0.5
    //     //     }
    //     // })

        
    // }

    // decStar = () => {
    //     // this.state.stars += 0.5
    //     // console.log("this state", this.state.stars)
    //     // 
    //     if(this.state.stars<=0){
    //         return;
    //     }
    //     this.setState({
    //         stars: this.state.stars - 0.5
    //     })
    // }

    // handleFav=()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }

    // handleAddToCart = () => {
    //     this.setState({
    //         isInCart: !this.state.isInCart
    //     })
    // }

    render() {
        console.log(this.props)
        const {movies:data}= this.props
        console.log(data)

        const {movies,addStars}=this.props
        // destruction 
        // const {plot,price,rating,stars,fav,isInCart}= this.state
        const {title, plot, price, rating, stars, fav, isInCart } = this.props.movies
        // const { title, plot, price, rating, stars, fav, isInCart } = data


        return (
            //  <h2>Movie Cards</h2>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3OI_LAKQA9cLi1u0p4B742v_CsaTG6cDbGw&usqp=CAU" />
                    </div>
                    
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" onClick={this.decStar} />
                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars"  />
                                {/* <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" onClick={this.addStar}/> */}
                                {/* <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" onClick={()=>{this.props.addStars(this.props.movies)}} /> */}
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/1237/1237946.png" onClick={() => {addStars(movies) }} />


                                
                                <span>{stars}</span>
                            </div>
                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}
                            {/* <button className="favourite-btn">Favourite</button>
                            <button className="unfavourite-btn ">Un-favourite</button> */}

                            <button className={fav ? "unfavourite-btn" : "favourite-btn"} onClick={this.handleFav}>{fav ? "unfavourite" : "favourite"}</button>

                            {/* <button className="cart-btn">Add to cart</button> */}
                            <button className={isInCart ? "unfavourite-btn" : "cart-btn"} onClick={this.handleAddToCart}>{isInCart ? "Remove from Cart" : "Add to cart"}</button>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default MovieCard