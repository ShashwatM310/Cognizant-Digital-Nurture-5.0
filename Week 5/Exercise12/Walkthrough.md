# Conditional Rendering in React

## What is Conditional Rendering?
In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application. Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or the conditional operator to create elements representing the current state, and let React update the UI to match them.

## Using Element Variables
You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn't change.
For example, you can declare a variable `let button;` and then use an `if` statement to assign an element to it:
```jsx
let button;
if (isLoggedIn) {
  button = <LogoutButton onClick={handleLogoutClick} />;
} else {
  button = <LoginButton onClick={handleLoginClick} />;
}
```
You can then output the variable anywhere within the JSX array:
```jsx
return (
  <div>
    <Greeting isLoggedIn={isLoggedIn} />
    {button}
  </div>
);
```

## Inline Conditions with Logical &&
You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical AND `&&` operator. It can be handy for conditionally including an element:
```jsx
{unreadMessages.length > 0 &&
  <h2>You have {unreadMessages.length} unread messages.</h2>
}
```

## Inline If-Else with Conditional Operator
Another method for conditional rendering elements inline is using the JavaScript conditional operator `condition ? true : false`.
```jsx
<div>
  The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
</div>
```

## Preventing Component from Rendering
In rare cases, you might want a component to hide itself even though it was rendered by another component. To do this, return `null` instead of its render output.
Returning `null` from a component's render method does not affect the firing of the component's lifecycle methods.
```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}
```
