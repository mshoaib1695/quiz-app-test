import React from 'react'

function QuestionHeader(props) {
    return (
        <>
            <div className="question-header-container">
                {
                    <div>
                        <p className="question-heading">Question {props.no +1} of {props.total}</p>
                        <p>{decodeURIComponent(props.question.category)}</p>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star notchecked"></span>
                        <span className="fa fa-star notchecked "></span>
                        <p className="question-element">{decodeURIComponent(props.question.question)}</p>
                    </div>
                }
            </div>
        </>
      )
  }

  export default QuestionHeader