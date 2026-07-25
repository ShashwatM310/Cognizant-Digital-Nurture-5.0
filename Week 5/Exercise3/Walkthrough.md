# React Components & Styling: Introduction

## React Components
In React, a component is a reusable, self-contained piece of UI. Components let you split the UI into independent, reusable pieces. Conceptually, components are like JavaScript functions: they accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

## Components vs JavaScript Functions
While functional components in React are technically JavaScript functions, a **React Component** has specific constraints and purposes compared to a generic JS function:
* **Return Value:** A React component must return a React Element (typically written in JSX), which determines what renders on the UI. A regular JS function can return anything.
* **Execution:** A regular JS function is called explicitly by the developer (`myFunction()`), whereas React components are typically invoked by the React rendering engine via JSX (`<MyComponent />`).

## Types of Components
In React, there are primarily two types of components:
1. **Function Components** (Functional Components)
2. **Class Components**

### Function Component
A function component is a plain JavaScript function that accepts props as an argument and returns a React element. With the introduction of React Hooks, functional components can now manage state and side-effects, making them the standard way to write React components today.
```jsx
function CalculateScore(props) {
  return <h1>Score: {props.Total / props.Goal}</h1>;
}
```

### Class Component
Before React 16.8, Class Components were required if a component needed to manage state. A Class Component requires you to extend from `React.Component` and must include a `render()` method that returns a React element.

## The `render()` Function
The `render()` method is the only required method in a Class Component. When called, it examines `this.props` and `this.state` and returns a React element (usually via JSX). The `render()` function should be pure, meaning it does not modify component state and returns the same result each time it's invoked.

## Applying Styles in React
There are several ways to apply styles to React components:
1. **Inline Styling:** Passed as an object to the `style` attribute. (e.g., `style={{ color: 'red' }}`)
2. **CSS Classes:** Using the `className` attribute to map to standard `.css` stylesheet classes (e.g., `className="formatstyle"`). This requires importing the stylesheet into the component file (`import '../Stylesheets/mystyle.css';`).
3. **CSS Modules / Styled Components:** For localized, scoped styling.
