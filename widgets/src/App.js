import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

//Hard coded questions
const accordianItems = [
{title: 'What is React?', content: 'React is a front end JS framework.'}, 
{title: 'Why use React?', content: 'React is a popular JS library.'}, 
{title: 'How do you use React?', content: 'By creating components.'}
];

export default () => {
    return (
        <div>
            <Search />
        </div>
    );
};