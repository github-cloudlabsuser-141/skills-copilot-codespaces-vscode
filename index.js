import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
        const reversedMarkdown = markdown.split('').reverse().join('');
        const capitalizedMarkdown = reversedMarkdown.charAt(0).toUpperCase() + reversedMarkdown.slice(1);
        setMarkdown(capitalizedMarkdown);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
    const data = [
        [
            { name: 'John', age: 25 },
            { name: 'Jane', age: 30 },
            { name: 'Bob', age: 35 }
        ],
        [
            { name: 'Alice', age: 20 },
            { name: 'Eve', age: 28 },
            { name: 'Charlie', age: 32 }
        ]
    ];

    const names = data.flatMap(arr => arr.map(obj => obj.name));
    console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice', 'Eve', 'Charlie']
};

export default MarkdownEditor;