import React from "react";
import { Link } from "react-router-dom";
import "./ImageView.css";

const ImageView = (props) => {
    const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image;
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="imageView__container">
                    <img src={image} alt={tags} className="imageView__img img-responsive" />
                    <div className="imageView__copyright">
                        <p>&copy;pixabay</p>
                    </div>
                    <div className="imageView__text">
                        <h4>Credit: <span>{owner}</span></h4>
                        <h4>Download Link: <span><a target="_blank" href={pageURL}>click here!</a></span></h4>
                        <button className="active-recipe__button">
                            <Link to="/">Home</Link>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ImageView;