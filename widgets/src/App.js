import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

//Hard coded questions
const accordianItems = [
{title: 'What is React?', content: 'React is a front end JS framework.'}, 
{title: 'Why use React?', content: 'React is a popular JS library.'}, 
{title: 'How do you use React?', content: 'By creating components.'}
];

const options = [
{label: 'The colour red', value: 'red'}, 
{label: 'The colour green', value: 'green'},
{label: 'A shade of blue', value: 'blue'}
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    
    return (
        <div>
            <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected} 
                options={options}
            />
        </div>
    );
};