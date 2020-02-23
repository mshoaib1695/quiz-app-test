import React, { useState } from 'react';
import './App.css';
import ProgerssBar from './Components/ProgressBar'
import Answers from './Components/Answers'
import QuestionHeader from './Components/QuestionHeader'
import Questions from './questions.json'
import TopProgressBar from './Components/TopProgressBar'


function App() {
  const clickHandler = (answer, no) => {
    if (selectable) {
      setselected(no)
      setselectable(false)
      let noOfQuestionsAnswered = question_no + 1
      let remaining = Questions.length - (question_no + 1)
      setnoOfQuestionsAnswered(noOfQuestionsAnswered)
      setremaining(remaining)

      if (Questions[question_no].correct_answer === answer) {
        setisAnswered(true)
        setisCorrect(true)
        let percentage = (((noOfCorrectAnswers + 1) / noOfQuestionsAnswered) * 100)
        let min = (((noOfCorrectAnswers + 1) / Questions.length) * 100)
        let max = (((noOfCorrectAnswers + 1 + (Questions.length - noOfQuestionsAnswered)) / Questions.length) * 100)
        setnoOfCorrectAnswers(noOfCorrectAnswers + 1)
        setpercentage(percentage)
        setmin(min)
        setmax(max)

      } else {
        let percentage = (((noOfCorrectAnswers) / noOfQuestionsAnswered) * 100)
        let min = (((noOfCorrectAnswers) / Questions.length) * 100)
        let max = (((noOfCorrectAnswers + (Questions.length - noOfQuestionsAnswered)) / Questions.length) * 100)
        setpercentage(percentage)
        setmin(min)
        setmax(max)

        setisAnswered(true)
        setisCorrect(false)
      }

    }
  }
  const [question_no, setquestion_no] = useState(0)
  const [isAnswered, setisAnswered] = useState(false)
  const [isCorrect, setisCorrect] = useState(false)
  const [selected, setselected] = useState(false)
  const [selectable, setselectable] = useState(true)
  const [percentage, setpercentage] = useState(0)
  const [min, setmin] = useState(0)
  const [max, setmax] = useState(100)
  const [noOfCorrectAnswers, setnoOfCorrectAnswers] = useState(0)
  const [noOfQuestionsAnswered, setnoOfQuestionsAnswered] = useState(0)
  const [remaining, setremaining] = useState(Questions.length)
  const [qfinish, setqfinish] = useState(false)

  return (
    <>
      <TopProgressBar noOfQuestionsAnswered={noOfQuestionsAnswered} total={Questions.length} />
      <div className="logoImage">
          <img src="/Expertizo-logo.png" />
        </div>
        <div className="App">
        {
          qfinish ?
            <>
              <div>
                <p>Quiz Result</p>
                <p>No Of Correct Answers {noOfCorrectAnswers}</p>
                <p>Percentage {percentage}</p>
              </div>
            </>
            :
            <>
              <QuestionHeader question={Questions[question_no]} no={question_no} total={Questions.length} />
              <Answers selected={selected} clickHandler={(answer, no) => clickHandler(answer, no)} question={Questions[question_no]} />
              {
                isAnswered && (
                  isCorrect ?
                    <p>Correct!</p>
                    :
                    <p>Sorry!</p>
                )
              }
              {
                isAnswered &&
                <button className="next-button" onClick={() => {
                  if (Questions.length > question_no + 1) {
                    setquestion_no(question_no + 1)
                    setselectable(true)
                    setselected(false)
                  } else {
                    setqfinish(true)
                  }
                }}>Next Questions</button>
              }
              <ProgerssBar min={min} percentage={percentage} max={max} />
            </>
        }

      </div>
    </>
  );
}

export default App;
