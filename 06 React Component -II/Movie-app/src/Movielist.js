import React from "react";
import MovieCard from "./Moviecard";
// import { Component } from "react";

// class MovieCard extends Component {}

class MovieList extends React.Component {

    constructor() {
        // super()
        // this.state = {
        //     title: "The Avenger",
        //     plot: "Supernatural power show in movie",
        //     price: 199,
        //     rating: 8.9,
        //     stars: 0,
        //     fav: false,
        //     isInCart: false
        // }

        super()
        this.state = {
            movies:[
                {
                    title: 'The Avengers',
                    plot:
                        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                    rating: '8.0',
                    price: 99,
                    stars: 0,
                    fav: false,
                    isInCart: false
                },
                {
                    title: 'The Dark Knight',
                    plot:
                        'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
                    rating: '9.0',
                    price: 199,
                    stars: 0,
                    fav: false,
                    isInCart: false
                },
                {
                    title: 'Iron Man',
                    plot:
                        'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
                    poster:
                        'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',
                    rating: '7.9',
                    price: 139,
                    stars: 0,
                    fav: false,
                    isInCart: false
                }
            ]
        }

        // this.addStar= this.addStar.bind(this)
    }

    handleStar=(movie)=>{
        const {movies}= this.state
        // const mid= this.state.movies.indexOf(movie)
        const mid = movies.indexOf(movie)

        if(movies[mid].stars>=5){
            return
        }
        movies[mid].stars += 0.5

        this.setState({
            movies:movies
        })
    }

    // addStar=()=>{
    //     if (this.state.stars >=50) {
    //         return;
    //     }
        // this.state.stars += 0.5
        // console.log("this state", this.state.stars)
        // form
        // this.setState({
        //     stars: this.state.stars + 0.5

        // }, () => console.log("stars inside callback", this.state.stars))
        // this.setState({
        //     stars:this.state.stars+0.5
        
        // })
        // this.setState({
        //     stars: this.state.stars + 0.5

        // })
        // this.setState({
        //     stars: this.state.stars + 0.5

        // })
        // this.setState({
        //     stars: this.state.stars + 0.5

        // })

    //     console.log("stars:", this.state.stars)

    //     // form 2
        
    //     this.setState((prevState)=>{
    //         return {
    //             stars:prevState.stars+0.5
    //         }
    //     })
    // }
    render() {
        // const {title, plot, price, rating, stars, fav, isInCart,poster } = this.state.movies
        const {movies}= this.state
        return (
            <>
            {/* <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} isInCart={isInCart} /> */}
               {/* { this.state.movies.map((movie)=><MovieCard movies={movie} />)} */}
                {movies.map((movie) => <MovieCard movies={movie} addStars={this.handleStar} />)}

                
                {/* <MovieCard movies={this.state} /> */}
                

            </>
        );
    }
}

export default MovieList