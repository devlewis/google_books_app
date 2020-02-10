import React from 'react';
import Result from '../Result/Result.js'

const ResultsList = (props) => {
    console.log(props.results);

    return (
        <ul>
            {props.results.map(
                (item, index) => {
                    return (
                        <Result
                            key={index}
                            results={props.results}
                            item={item} />
                    )
                }
            )
            }
        </ul>
    )
}

export default ResultsList;