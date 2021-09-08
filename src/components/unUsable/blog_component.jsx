import React from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../../css/unUsable/blog-css.css'
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime



function Blog() {
    return (
        <Anime
            animeConfig={{
                autoplay: false,
                duration: 1500,
                easing: "easeInOutSine"
            }}
            _onClick={[
                {
                    targets: " .blog",
                    scale: 0.85,
                    keyframes: [
                        {translateY: -20},
                        {translateX: 50},
                        {translateY: 20},
                        {translateX: 0},
                        {translateY: 0}
                    ],
                    easing: "easeInOutSine",
                    duration: 2000,
                    direction: 'alternate',
                    opacity: 0.5,
                }
            ]}
            initial={[
                {
                    targets: ".blog",
                    backgroundColor: "red",

                }
            ]}
        >
            {/*<div id="Box" style={{ height: 250, width: 250, background: "#d3d",  margin: "200px", }} />*/}
            <section className="blog-section">
                <div className="blog-1"></div>
                <div className="blog-1"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
                <div className="blog"></div>
            </section>
        </Anime>
    )
}

export default Blog;