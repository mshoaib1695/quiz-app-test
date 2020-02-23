import React from 'react'

function ProgressBar(props) {
    let percentage = ((props.noOfQuestionsAnswered / props.total )* 100)
    return (
        <>
            <div className="top-progress-bar">
                <div className="top-progress-bar-filler"
                    style={{ width: `${percentage}%` }} />
            </div>
        </>
    )
}

export default ProgressBar