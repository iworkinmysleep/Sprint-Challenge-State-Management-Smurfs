1. What problem does the context API help solve?

Context API helps to solve the problem of prop drilling within components. Context API is used to share state within components.



1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects created to pass information to the store.  Actions objects must specify a type so that the store will know how to handle the information or 'payload'.  The store holds all of the application's state.  Actions can update the state through reducers. Reducers handle the actions and determine how the state will update.  The store is known as the 'single source of truth' because it holds and protects the applications state. State within the store is immutable.  The only way to update the state is with an action..



1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global and component state is local.  State management libraries hold the application's state so that whenever a component needs to update it, the component hooks into it to use it. Component's state is used within the component itself and can be passed via props.  



1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is middleware used by redux to allow for asynchronous actions.  Middleware sits between the dispatched action and the reducer.  It allows us to call functions with our creators instead of only objects.



1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API is the easiest to set up and use with React, but I love the way redux has so many moving parts that work together.  My favorite to use is Context.
