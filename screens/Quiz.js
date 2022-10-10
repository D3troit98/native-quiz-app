import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { useSelector, useDispatch } from 'react-redux'
import { setOption } from '../features/counterSlice';
import Sudoku from "../assets/astronaut-in-tea-break.gif"
const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [questionNo, setQuestionNo] = useState(0)
    const [options, setOptions] = useState([])
    const [selectedButton, setSelectedButton] = useState('')
    const [score, setScore] = useState(0)


    const count = useSelector((state) => state.counter.options)

    const dispatch = useDispatch()
    useEffect(() => {
        const getQuiz = async () => {
            const url = 'https://opentdb.com/api.php?amount=10&category=31&type=multiple&encode=url3986';
            const res = await fetch(url)
            const data = await res.json();
            setQuestions(data.results)
            setOptions(generateOptionsAndShuffle(data.results[0]))
            dispatch(setOption(''))
        }
        getQuiz();
    }, [])

    const handleNextPress = () => {
        console.log(count)
        if (count === questions[questionNo].correct_answer) {
            setScore((prevScore) => prevScore + 10)
        }
        setQuestionNo((prevQuestionNo) => prevQuestionNo + 1)
        setOptions(generateOptionsAndShuffle(questions[questionNo + 1]))
        dispatch(setOption(''))
        setSelectedButton('')

    }

    const handleResultPress = () => {
        if (count === questions[questionNo].correct_answer) {
            setScore((prevScore) => prevScore + 10)
        }
        navigation.navigate("Result", {
            score: score
        })
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const generateOptionsAndShuffle = (_question) => {

        const options = [..._question.incorrect_answers]
        options.push(_question.correct_answer)
        shuffleArray(options)
        return options

    }

    const handleSelectedOption = (_option) => {
        //     console.log(_option)
        //    setGotAnswer(_option)
        //     console.log(gotAnswer)

        //     console.log(gotAnswer === questions[questionNo].correct_answer)

        dispatch(setOption(_option))

    }



    return (
        <View style={styles.container}>
            <Image
                style={styles.banner}
                source={Sudoku}
            />
            {questions ? (
                <View style={styles.parent}>
                    <View style={styles.top}>
                        <Text style={styles.question}>
                            {`Q. ${decodeURIComponent(questions[questionNo].question)}`}
                        </Text>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity
                            style={[styles.optionButton, selectedButton === 'option0' ? styles.selectButton : '']}
                            onPress={() => {
                                setSelectedButton('option0')
                                handleSelectedOption(options[0])
                            }}
                        >
                            <Text style={styles.option}>{decodeURIComponent(options[0])}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.optionButton, selectedButton === 'option1' ? styles.selectButton : '']}
                            onPress={() => {
                                setSelectedButton('option1')
                                handleSelectedOption(options[1])
                            }}

                        >
                            <Text style={styles.option}>{decodeURIComponent(options[1])}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.optionButton, selectedButton === 'option2' ? styles.selectButton : '']}
                            onPress={() => {
                                setSelectedButton('option2')
                                handleSelectedOption(options[2])
                            }}

                        >
                            <Text style={styles.option}>{decodeURIComponent(options[2])}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.optionButton, selectedButton === 'option3' ? styles.selectButton : '']}
                            onPress={() => {
                                setSelectedButton('option3')
                                handleSelectedOption(options[3])
                            }}

                        >
                            <Text style={styles.option}>{decodeURIComponent(options[3])}</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.bottom}>
                        <TouchableOpacity>
                            <Text style={styles.buttonText}>{`${questionNo + 1}/10`}</Text>
                        </TouchableOpacity>
                        {questionNo === 9 && count !== '' ? (
                            <TouchableOpacity style={[styles.buttons, styles.buttonEnd]} onPress={handleResultPress}>
                                <Text style={styles.buttonText} >Result</Text>
                            </TouchableOpacity>
                        ) : <TouchableOpacity style={styles.buttons}>
                            <Text style={styles.buttonText} onPress={handleNextPress}>Next</Text>
                        </TouchableOpacity>}


                    </View>
                </View>
            ) : (
                <Spinner
                    visible={true}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
            )}

        </View>
    )
}

export default Quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 16,
        height: '100%',
        backgroundColor: '#CAD2C5',
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        textTransform: 'capitalize',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    buttons: {
        backgroundColor: '#52796F',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginBottom: 30,

    },
    selectButton: {
        backgroundColor: '#2F3E46',
    },
    buttonEnd: {
        backgroundColor: '#2F3E46',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF',
        alignItems: 'center',
        textTransform: 'capitalize'

    },
    question: {
        fontSize: 28,
        color: '#000000'
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: '#FFF'

    },
    optionButton: {
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#84A98C',
        borderRadius: 12,
    },

    parent: {
        height: '100%',
        zIndex: 100,
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex'
    },
    spinnerTextStyle: {
        color: '#FFF'
    },
    banner: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
        width: 300,
        height: 300,
        opacity: 0.5,
    }
})