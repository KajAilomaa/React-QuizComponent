import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    constructor(props){
        super(props)
        this.state = { incorrectAnswer : false }
    }
    render(){
        return (
            <main>
                { this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null}
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {this.props.quiz_question.answer_options.map((value, index) => (
                                <QuizQuestionButton
                                    key={index}
                                    button_text={value}
                                    clickHandler={this.handleClick.bind(this)}
                                />
                        ))}
                    </ul>
                </section>
            </main>
        )
    }
    handleClick(buttonText){
        if (this.props.quiz_question.answer === buttonText)
        {
            this.props.showNextQuestionHandler()
            this.setState( { incorrectAnswer : false })
        } else {
            this.setState( { incorrectAnswer : true })
        }
    }
}

export default QuizQuestion
