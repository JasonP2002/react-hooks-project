import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
            <Header />
            <Route path="/"><Accordion items={accordianItems}/></Route>
            <Route path="/list"><Search /></Route>
            <Route path="/dropdown"><Dropdown label="Select a Colour" options={options} selected={selected} onSelectedChange={setSelected}/></Route>
            <Route path="/translate"><Translate /></Route>
        </div>
    );
};