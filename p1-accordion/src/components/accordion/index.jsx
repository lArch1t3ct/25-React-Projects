import { useState } from "react";
import data from "./data";

function Accordion(){
    const [selected, setSelected] = useState(undefined);

    const handleSingleSelection = (getQuestionId) => {
        setSelected(getQuestionId === selected ? null : getQuestionId);

    }
    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0
                    ? data.map( (dataItem) => (
                        <div className="item">
                            <div className="title"
                                 onClick={ () => handleSingleSelection(dataItem.id) }
                            >
                                <h3>{ dataItem.question }</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id
                                ? <div className="content">{ dataItem.answer }</div>
                                : null
                            }
                        </div>
                    ) )
                    : <div>No data was returned!</div>
                }
            </div>
        </div>
    );
}

export default Accordion;