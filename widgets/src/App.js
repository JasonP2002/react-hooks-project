import React from 'react';
import Accordion from './components/Accordion';

//Hard coded questions
const items = [
{title: 'What is React?', content: 'React is a front end JS framework.'}, 
{title: 'Why use React?', content: 'React is a popular JS library.'}, 
{title: 'How do you use React?', content: 'By creating components.'}
];

export default () => {
    return (
        <Accordion items={items}/>
    );
};