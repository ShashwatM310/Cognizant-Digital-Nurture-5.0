# React Rendering, Lists, and Keys

## Ways of Conditional Rendering
In React, you can conditionally render components in several ways depending on logic and layout requirements:
1. **if/else statements**: Typically used outside of the JSX `return()`, inside a component or helper function to return an entirely different component structure.
2. **Element Variables**: Declaring a `let` variable and conditionally assigning a JSX node to it using standard `if/else` logic, and then injecting the variable into your return.
3. **Ternary Operator `(condition ? true : false)`**: Useful for inline rendering directly inside JSX to toggle between two components.
4. **Logical AND `&&`**: An elegant inline way to render a component if a condition is true, or render nothing if it is false (`condition && <Component />`).

## Rendering Multiple Components (List Component)
A List Component in React takes an array of data and maps it into a sequence of corresponding React elements. This avoids duplicating JSX manually for uniform data types (like lists of comments, products, or users).

## React `map()` function
React leans on JavaScript ES6 array methods heavily. The `map()` function is used to loop over arrays and transform each element into a React node.
```jsx
const numbers = [1, 2, 3];
const listItems = numbers.map((number) => <li>{number}</li>);
```

## Keys in React Applications
A "key" is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed. Keys must be given to the elements inside the array to give the elements a stable identity. 
*Keys should be unique among their siblings, usually taking the value of a unique database ID.*

## Extracting Components with Keys
When you extract a list item into its own component to keep your code clean, you must assign the key on the `<Component />` instance rather than in the component's internal `<li>` wrapper.
```jsx
// Correct Usage
{list.map(item => <ListItem key={item.id} value={item.value} />)}
```
