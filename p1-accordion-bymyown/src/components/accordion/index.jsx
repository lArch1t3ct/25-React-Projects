import './styles.css';
import data from './data';

import { useState } from 'react';

function Accordion(){
    const [selectedItem, setSelectedItem] = useState(undefined);
    const [isMultiselectionOn, setIsMultiselectionOn] = useState(false);
    const [questions, setQuestions] = useState([]);

    const handleSingleSelection = (questionId) => {
        if(questions.length > 0){
            setQuestions([]);
            setSelectedItem(undefined);
        } else{
            setSelectedItem(
                selectedItem === questionId 
                ? undefined 
                : questionId
            );
        }
    }

    const handleMultiSelection = (questionId) => {
        const newQuestionsState = [...questions];
        
        // If there is a selected item from before,
        // push it into the questions array and
        // set the selectedItem to undefined.
        // Otherwise, the previous expanded accordion
        // will not be able to shrink.
        if (questionId === selectedItem) {
            newQuestionsState.push(questionId);
            setSelectedItem(undefined);
        }
        
        const questionIndex = newQuestionsState.indexOf(questionId);
        if(questionIndex === -1){
            newQuestionsState.push(questionId);            
        } else {
            newQuestionsState.splice(questionIndex, 1);
        }

        setQuestions(newQuestionsState);
    }

    return(
        <div className='wrapper'>
            <div className='accordion'>
                {
                    data.map( (dataItem) => (
                        <div key={dataItem.id} className='accordion-item'>
                            <div className='question'
                                 onClick={
                                    isMultiselectionOn
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                 }
                            >
                                <h3>{dataItem.question}</h3>
                                {
                                    selectedItem === dataItem.id || questions.indexOf(dataItem.id) !== -1
                                    ? <span>-</span>
                                    : <span>+</span>
                                }
                            </div>
                            {
                                selectedItem === dataItem.id || questions.indexOf(dataItem.id) !== -1
                                ? (
                                    <div className='answer'>
                                        <p>{dataItem.answer}</p>
                                    </div>
                                )
                                : null
                            }
                        </div>
                    ))
                }
            </div>
            <button onClick={ () => setIsMultiselectionOn(!isMultiselectionOn)}
            >
                Enable / Disable Multi Selection
            </button>
        </div>
    );
}

export default Accordion;