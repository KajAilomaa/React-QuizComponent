import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {
    render(){
        return (
            <main>
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
            this.props.showNextQuestionHandler()
    }
}

export default QuizQuestion
