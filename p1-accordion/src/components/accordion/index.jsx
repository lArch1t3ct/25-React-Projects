import { useState } from "react";
import data from "./data";
import './styles.css';

function Accordion(){
    const [selected, setSelected] = useState(undefined);
    const [isMultiselectOn, setIsMultiselectOn] = useState(false);
    const [multipleAccordion, setMultipleAccordion] = useState([]);

    const handleSingleSelection = (getQuestionId) => {
        setSelected(getQuestionId === selected ? null : getQuestionId);

    }

    const handleMultiSelection = (getQuestionId) => {
        let newState = [...multipleAccordion];
        const currentIdIndex = newState.indexOf(getQuestionId);

        if(currentIdIndex === -1){
            newState.push(getQuestionId);
        } else {
            newState.splice(currentIdIndex, 1);
        }

        setMultipleAccordion(newState);
    }

    console.log(selected, multipleAccordion);
    return (
        <div className="wrapper">
            <button onClick={ () => setIsMultiselectOn(!isMultiselectOn) }>Enable Multi Selection</button>
            <div className="accordion">
                {
                    data && data.length > 0
                    ? data.map( (dataItem) => (
                        <div className="item">
                            <div className="title"
                                 onClick={ 
                                    isMultiselectOn
                                    ? () => handleMultiSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                                  }
                            >
                                <h3>{ dataItem.question }</h3>
                                <span>+</span>
                            </div>
                            <div className="answer">
                                {
                                    selected === dataItem.id || multipleAccordion.indexOf(dataItem.id) !== -1
                                    ? <div className="content">{ dataItem.answer }</div>
                                    : null
                                }
                            </div>
                        </div>
                    ) )
                    : <div>No data was returned!</div>
                }
            </div>
        </div>
    );
}

export default Accordion;