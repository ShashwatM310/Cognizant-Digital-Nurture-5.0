# Styling in React: Introduction

## The Need for Styling React Components
As React is heavily based on componentizing user interfaces, styles also need to be modular. A plain HTML page usually relies on global CSS, but in modern React applications, styling components specifically helps prevent scope leakage (where styles written for one component accidentally affect another). Effective component styling leads to encapsulated, reusable, and predictable UIs.

## Working with CSS Modules
**CSS Modules** are CSS files in which all class names and animation names are scoped locally by default. 
- In React (specifically with `create-react-app`), they are adopted by naming your CSS file with the `.module.css` extension (e.g., `CohortDetails.module.css`).
- They are imported into a component as a JavaScript object: `import styles from './CohortDetails.module.css';`
- Instead of using raw strings for class names (`className="box"`), you use the imported styles object (`className={styles.box}`).
- The build tool transforms these classes into unique identifiers (like `CohortDetails_box__1a2b3`), ensuring that the styling never leaks globally to other elements outside that component.

## Inline Styles in React
Inline styling in React is achieved by passing a JavaScript object to the `style` attribute.
- Property names must be written in camelCase (e.g., `backgroundColor` instead of `background-color`).
- It allows dynamically computed styling based on component props or state (e.g., changing text color to "green" if `status === 'ongoing'`, else "blue").

```jsx
// Example of inline styling
const headingStyle = {
  color: props.status === 'ongoing' ? 'green' : 'blue'
};

return <h3 style={headingStyle}>Cohort Title</h3>;
```
