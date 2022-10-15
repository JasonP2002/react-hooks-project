import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    { label: 'Welsh', value: 'cy'},
    { label: 'Afrikaans', value: 'af' },
    { label: 'Arabic', value: 'ar' },
    { label: 'Hindi', value: 'hi' }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                    <Dropdown label="Select a Language" options={options} selected={language} onSelectedChange={setLanguage}/>
                    <hr />

                    <h3 className="ui header">Output</h3>
                    <Convert language={language} text={text}/>
                </div>
            </div>
        </div>
    );
};

export default Translate;