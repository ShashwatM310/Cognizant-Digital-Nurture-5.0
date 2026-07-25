# React Components: Introduction

## React Components
In React, a component is a reusable, self-contained piece of UI. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions: they accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.

## Components vs JavaScript Functions
While functional components in React are technically JavaScript functions, a **React Component** has specific constraints and purposes compared to a generic JS function:
* **Return Value:** A React component must return a React Element (typically written in JSX), which determines what renders on the UI. A regular JS function can return anything (or nothing).
* **Execution:** A regular JS function is called explicitly by the developer (`myFunction()`), whereas React components are typically invoked by the React rendering engine via JSX (`<MyComponent />`).
* **Lifecycle and State:** React components can hook into the React rendering lifecycle and manage internal state (using Hooks in functions, or state in classes).

## Types of Components
In React, there are primarily two types of components:
1. **Function Components** (Functional Components)
2. **Class Components**

### Function Component
A function component is a plain JavaScript function that accepts props as an argument and returns a React element. With the introduction of React Hooks (like `useState` and `useEffect`), functional components can now manage state and side-effects, making them the standard way to write React components today.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class Component
Before React 16.8 (Hooks), Class Components were required if a component needed to manage state or access lifecycle methods (e.g., `componentDidMount`). A Class Component requires you to extend from `React.Component` and must include a `render()` method that returns a React element.
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## Component Constructor
In a **Class Component**, the constructor is a special method called before the component is mounted. It is primarily used for two purposes:
1. Initializing local state by assigning an object to `this.state`.
2. Binding event handler methods to the instance.

*Note: You must call `super(props)` inside the constructor before accessing `this`.*

## The `render()` Function
The `render()` method is the only required method in a Class Component. When called, it should examine `this.props` and `this.state` and return a React element (usually via JSX), Arrays and fragments, Portals, String and numbers, or Booleans/null. The `render()` function should be pure, meaning it does not modify component state and returns the same result each time it's invoked without directly interacting with the browser.
