import { useState } from "react";
import data from "./data";

function Accordion(){
    const [selected, setSelected] = useState(undefined);

    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    data && data.length > 0
                    ? data.map( (dataItem) => (
                        <div className="item">
                            <div className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
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