# JSX and Inline Styling in React

## What is JSX?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside a JavaScript file. JSX makes it easier to write and add HTML in React by eliminating the need to separate markup from logic, producing highly readable component structures.

## ECMAScript (ES)
ECMAScript is a standardized scripting language specification, and JavaScript is the most popular implementation of this standard. Modern React heavily leverages ES6+ features (like arrow functions, classes, const/let, and destructuring) to construct components and manage application state efficiently.

## React.createElement()
Under the hood, browsers do not understand JSX natively. During the build process, tools like Babel transpile all JSX into standard JavaScript using `React.createElement(component, props, ...children)`.
For example, writing `<h1 className="title">Hello</h1>` in JSX is ultimately compiled to:
`React.createElement('h1', {className: 'title'}, 'Hello')`.

## Creating React Nodes with JSX
React nodes are the building blocks of a React application's UI. Creating nodes is as simple as defining variables with JSX:
`const myNode = <div><p>This is a React Node</p></div>;`
React handles taking these nodes and constructing the virtual DOM.

## Rendering JSX to the DOM
React applications inject the virtual DOM into the physical browser DOM through the `react-dom/client` library. The root element is selected, and `root.render()` is called:
```jsx
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## JavaScript Expressions inside JSX
JSX allows you to embed any valid JavaScript expression directly within the markup by wrapping it in curly braces `{}`. This is how data is dynamically injected into the UI:
`<h1>{office.Name}</h1>`

## Inline CSS in JSX
In HTML, inline styles are provided as strings. In JSX, inline styles are passed as JavaScript objects where properties are written in camelCase. This enables applying conditional styling logically.
```jsx
const textStyle = {
  color: rent <= 60000 ? 'red' : 'green'
};
// Used as: <p style={textStyle}>Rent: {rent}</p>
```
