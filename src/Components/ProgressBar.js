import React from 'react'

function ProgressBar(props) {
    return (
        <>
            <div className="progress-bar-container">
                <div className="progress-bar-titles">
                    <p>Score {parseInt(props.percentage)}%</p>
                    <p>Score {props.max}%</p>
                </div>
                <div className="progress-bar">
                    <div className="filler" 
                    style={{
                        background:`
                        linear-gradient(
                            to right, 
                            #000 ${props.min}%, 
                            #717171 ${props.min}%, 
                            #717171 ${props.percentage}%,
                            #D2D2D2 ${props.percentage}%,
                            #D2D2D2 ${props.max}% ,
                            #FFFFFF 0)`
                        }} />
                </div>
            </div>
        </>
      )
  }

  export default ProgressBar