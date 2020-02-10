import React from 'react';

const Result = (props) => {
        return(
                <div className="result">
                    <div className="title">
                        {props.item.title}
                    </div>
                    <img src=
                        {props.item.imageLinks.smallThumbnail}
                    />
                    <div className="author">Author:
                        {props.item.authors ? props.item.authors[0] : "No Author Provided"}
                    </div>
                    <div className="price">Price:
                        {/* { price } */}
                    </div>
                    <div className="description">
                        {props.item.description}
                    </div>
                </div>
                )
    }


export default Result;