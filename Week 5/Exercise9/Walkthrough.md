# ES6 Features in React

## List of ES6 Features
ES6 (ECMAScript 2015) introduced many powerful features that modern React development heavily relies on:
- Let and Const keywords
- Arrow Functions
- Classes and Class Inheritance
- Destructuring assignment
- Spread and Rest operators
- Array iterators like `map()`, `filter()`, `reduce()`
- Template literals
- Promises

## JavaScript `let`
The `let` keyword allows you to declare block-scoped local variables. It replaced the older `var` keyword as the standard way to declare variables whose values may change over time.

## Differences between `var` and `let`
1. **Scope:** `var` is function-scoped (or globally scoped), whereas `let` is strictly block-scoped (e.g., inside an `if` block, a `for` loop, etc.).
2. **Hoisting:** Both are hoisted, but `let` does not initialize the variable, placing it in a "Temporal Dead Zone". Accessing a `let` variable before declaration throws a `ReferenceError`, whereas `var` results in `undefined`.
3. **Re-declaration:** `var` variables can be re-declared within the same scope. Re-declaring a `let` variable in the same scope throws a `SyntaxError`.

## JavaScript `const`
`const` is used to declare variables that are meant to be constant (immutable bindings). Like `let`, it is block-scoped. However, the value (or reference) it holds cannot be reassigned after initialization. (Note: For objects and arrays, the properties/elements inside them can still be mutated).

## ES6 Class Fundamentals
ES6 introduced the `class` syntax to create constructor functions prototype-based inheritance cleanly. A class encapsulates properties and methods. In React, classes are used to build Class Components by leveraging the `class MyClass { constructor() {} }` pattern.

## ES6 Class Inheritance
Inheritance allows one class to inherit the properties and methods of another class. It is achieved using the `extends` keyword. For example, `class MyComponent extends React.Component` allows the custom component to inherit React's native state-management and lifecycle methods.

## ES6 Arrow Functions
Arrow functions (`() => {}`) provide a shorter, more concise syntax for writing function expressions. They are especially critical in React because they do not have their own `this` binding; instead, they lexically bind `this` to the enclosing scope, preventing typical bugs when passing event handlers.

## Array `set()`, `map()` and `filter()`
- `map()`: Iterates over an array and returns a brand new array populated with the results of calling a provided function on every element. Ideal for transforming JSON arrays into JSX elements.
- `filter()`: Iterates over an array and returns a new array containing only elements that pass a specific condition (e.g. `score < 70`).
- `Set`: (Note: Not an array method, but a new Object type). A `Set` is a collection of unique values. It prevents duplicate entries natively.
