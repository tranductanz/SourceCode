import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Container, Grid, TextField, Button, Box } from '@material-ui/core';
import swal from 'sweetalert';

class QuestionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cauTraLoi: {},
        }

    }
    handleChangeInput = (event) => {
        const questionIdInPut = this.props.questions.find((item) => {
            return item.content === event.target.name;
        });
        const checkAnswers = this.props.questions.find((item) => {
            if (item.questionType === 2) {
                return item.answers.find((answers) => {
                    if (answers.content.toLowerCase() === event.target.value.toLowerCase()) {
                        return true;
                    }
                });
            };
        })

        const checkAnswer = () => {
            if (checkAnswers) {
                return true;
            }
            return false;

        }
        this.setState({
            cauTraLoi: {
                content: event.target.value.toLowerCase(),
                questionId: questionIdInPut.id,
                exact: checkAnswer(),
            }
        }, () => {
            this.props.dispatch({
                type: "CHECK_QUESTION",
                payload: {
                    questionId: questionIdInPut.id,
                    cauTraLoi: this.state.cauTraLoi,
                }
            })
        })


    }

    handleChangeMultipleChoice = (event) => {

        const questionId = this.props.questions.find((item) => {
            return item.answers.find((answers) => {
                return event.target.value === answers.content;
            })
        });

        const userInput = questionId.answers.find((item) => {
            return item.content === event.target.value;
        });
        const rightAnswer = questionId.answers.find((item) => {
            // item.exact
            return item.exact;
        })
        const checkAnswer = () => {
            if (userInput.exact === rightAnswer.exact) {
                return true;
            }
            return false;

        }
        this.setState({
            cauTraLoi: {
                content: event.target.value,
                questionId: questionId.id,
                exact: checkAnswer(),
            }
        }, () => {
            this.props.dispatch({
                type: "CHECK_QUESTION",
                payload: {

                    questionId: questionId.id,
                    cauTraLoi: this.state.cauTraLoi,

                }
            })
        })


    }
    refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 5000);
    }
    handleSubmit = (event) => {
        let count = 0;
        let err = 0;
        const DSArr = Object.values(this.props.danhSachDapAn);
        DSArr.map((item) => {
            if (item.cauTraLoi.exact) {
                count++
            }
            else {
                err++;
            }
        });
        swal("Are you sure?", {
            dangerMode: true,
            buttons: true,
        });
        swal("Bạn có xác nhận nộp bài tập không", {
            buttons: {
                defeat: "Khoan!!!",
                catch: {
                    text: "OK",
                    value: "finish",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "finish":
                        swal(`Điểm của bạn là ${count} Điểm`, `Số câu sai ${err}/ 8 Câu`, "success");
                        this.refreshPage();
                        break;
                    default:

                }
            });
    }



    render() {
        return (
            <Fragment>

                {this.props.questions.map((item) => {

                    return (
                        <Container

                            key={item.id}>
                            <Grid container>
                                <Grid item>
                                    <FormControl component="fieldset">
                                        <FormLabel

                                            value={item.id}
                                        >
                                            {item.id}) {item.content}
                                        </FormLabel>
                                        <RadioGroup

                                            name={item.content}
                                            onChange={this.handleChangeMultipleChoice}>
                                            {item.answers.map((answers, index) => {

                                                return (
                                                    <Fragment key={index}>
                                                        {item.questionType === 1 ?
                                                            <Container >
                                                                <Grid container>
                                                                    <Grid item>
                                                                        <FormControlLabel
                                                                            value={answers.content}
                                                                            control={<Radio />}
                                                                            label={answers.content} />
                                                                    </Grid>
                                                                </Grid>
                                                            </Container> :
                                                            <Fragment >
                                                                <TextField style={{ marginBottom: 30 }}
                                                                    name={item.content}
                                                                    onBlur={this.handleChangeInput}
                                                                    label="Câu trả lời của bạn"

                                                                />
                                                            </Fragment>
                                                        }
                                                    </Fragment>
                                                )
                                            })}
                                        </RadioGroup>
                                    </FormControl>

                                </Grid>
                            </Grid>

                        </Container>
                    )
                })}
                <Box style={{ textAlign: "center" }}>
                    <Button
                        onClick={(event) => this.handleSubmit(event)}
                        style={{ textAlign: "center" }}
                        type="submit"
                        variant="contained"
                        color="primary">
                        Nộp Bài
                    </Button>
                </Box>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.question.questionList,
        danhSachDapAn: state.answers.danhSachDapAn,
    }
}
export default connect(mapStateToProps)(QuestionList);