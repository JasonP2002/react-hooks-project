import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, selected, onSelectedChange, options }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    //Listens to clicks outside of dropdown box
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            //Only if click is outside of dropdown box
            setOpen(false);
        };

        document.body.addEventListener("click", onBodyClick, { capture : true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture : true });
        };
    }, []);

    const renderedOptions = options.map((option) => {

        //Add option only if it has not been selected
        if (option.value !== selected.value) {
            return (
                <div 
                    key={option.value} 
                    className="item"
                    onClick={() => onSelectedChange(option)}
                > 
                    {option.label}
                </div>
            );
        }
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon" />
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                      {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;