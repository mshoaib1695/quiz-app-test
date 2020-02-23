import React from 'react'

function QuestionHeader(props) {
    let difficult = 0
    if(props.question.difficulty == "hard"){
        difficult = 3
    }else if(props.question.difficulty == "medium"){
        difficult = 2

    }else if(props.question.difficulty == "easy"){
        difficult = 1
    }
    var stars = [];
        for (var i = 1; i < 6; i++) {
             stars.push(
                <div className="single-star-container" key={i}>
                <div className="single-star-fill" style={{ "width": i <= difficult ? `${30}px` :  `${0}px` }}>
                    <img className="single-star-outline" src="/star.png" alt="stars alt"></img>
                </div>
            </div>
            );
        }
    return (
        <>
            <div className="question-header-container">
                {
                    <div>
                        <p className="question-heading">Question {props.no + 1} of {props.total}</p>
                        <p>{decodeURIComponent(props.question.category)}</p>
                            {stars}
                        <p className="question-element">{decodeURIComponent(props.question.question)}</p>
                    </div>
                }
            </div>
        </>
    )
}

export default QuestionHeader