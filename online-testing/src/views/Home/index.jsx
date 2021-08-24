import { Typography } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { fetchQuestions } from '../../store/action/question';
import { connect } from 'react-redux';
import QuestionList from '../QuestionType/questionList';

class Home extends Component {

    render() {

        return (
            <div>
                <Typography variant="h3" align="center">
                    Online Test
                </Typography>
                <QuestionList />

            </div>
        );
    }
    componentDidMount() {
        this.props.dispatch(fetchQuestions);
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.question.questionList,
    }
}
export default connect(mapStateToProps)(Home);