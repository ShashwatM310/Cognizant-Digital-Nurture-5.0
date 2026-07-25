# React Events

## Understanding React Events
React elements handle events similarly to DOM elements, but with a few syntactic differences. An event handler in React is attached to an element using an attribute such as `onClick` or `onChange`. React events let you capture user interaction, form submissions, and device inputs predictably and consistently.

## Event Handlers
An event handler is a function (typically defined within your component) that will be executed when an event occurs. You pass this function as a prop to the React element.
- When creating a function that doesn't need external arguments, you can pass its reference directly: `onClick={handleClick}`.
- When you need to pass an argument, you generally use an inline arrow function to wrap it: `onClick={() => handleWelcome('Welcome!')}`.

## React Event Naming Convention
React uses camelCase for event names rather than lowercase. 
- In pure HTML you use `onclick`. In React JSX, you use `onClick`.
- In HTML you use `onchange`. In React JSX, you use `onChange`.

Additionally, you pass a function as the event handler rather than a raw string.
*HTML Example:* `<button onclick="activateLasers()">`
*React JSX Example:* `<button onClick={activateLasers}>`

## Synthetic Events
When an event handler is invoked in React, it does not receive the raw, native browser event. Instead, it receives a **SyntheticEvent**. 
React's `SyntheticEvent` is a cross-browser wrapper around the browser's native event. It has the same interface as the native event, including `stopPropagation()` and `preventDefault()`, except the events work identically across all browsers. React pools these synthetic events to improve performance.
