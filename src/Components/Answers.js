import React, { useState } from 'react'

function Answers(props) {
    let answersarray = [...props.question.incorrect_answers]
    answersarray[3] = props.question.correct_answer
    answersarray.sort((a, b) => 0.5 - Math.random());
    return (
        <>
            <div className="answers-container">
                <div>
                    <p style={{ backgroundColor: props.selected === 0 ? '#000' : '#E5E6E5', color: props.selected === 0 ? '#fff' : '#000' }} onClick={() => {
                        props.clickHandler(answersarray[0],0)
                    }}>{decodeURIComponent(answersarray[0])} </p>
                    <p style={{ backgroundColor: props.selected === 1 ? '#000' : '#E5E6E5', color: props.selected === 1 ? '#fff' : '#000' }} onClick={() => {
                        props.clickHandler(answersarray[1],1)
                    }}>{decodeURIComponent(answersarray[1])} </p>
                </div>
                {
                    props.question.type === 'multiple' &&
                        <div>
                            <p style={{ backgroundColor: props.selected === 2 ? '#000' : '#E5E6E5', color: props.selected === 2 ? '#fff' : '#000' }} onClick={() => {
                                props.clickHandler(answersarray[2],2)
                            }}>{decodeURIComponent(answersarray[2])} </p>
                            <p  style={{backgroundColor:props.selected === 3 ? '#000' :'#E5E6E5' , color: props.selected === 3 ? '#fff' : '#000'}}  onClick={() => {
                                props.clickHandler(answersarray[3],3)
                            }}>{decodeURIComponent(answersarray[3])} </p>
                        </div>
                }
            </div>
        </>
    )
}

export default Answers