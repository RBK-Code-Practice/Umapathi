
# Notes

1. `configureStore()` 
    A friendly abstraction over the standard Redux createStore() function.
      @param options — The store configuration.
      @returns — A configured Redux store.
------------------------------------------------------------------------------------
2. `createSlice` 
A function that accepts an 'initial state' an object full of reducer functions, and a "slice name", and 'automatically generates action creators' and 'action types' that correspond to the reducers and state.
------------------------------------------------------------------------------------

3. `Directory:: features/`
- The features/ directory is where all of the features in the application are stored. 
- Each feature should have its own directory
- Additionally, if a feature requires API calls, create an API file within the feature directory to keep related code organized.

------------------------------------------------------------------------------------

4. `thunk`
 "A piece of code that does some delayed work"
 Since redux works sychronously we need thunk to do async tasks.

------------------------------------------------------------------------------------

5. `builder.addCase`
Adds a case reducer to handle a single exact action type.

@remarks — All calls to builder.addCase must come before any calls to builder.addMatcher or builder.addDefaultCase.

------------------------------------------------------------------------------------

6. `creatSelector()`

Advantages over traditional redux
 - Memoization 
 - Avoids Unnessary re renders 
 - Accessing nested data from state
 - Recomputes when only the relevant state changes
 - In traditional Redux,we normally handle the sorting logic directly in the component or in a separate utility function yet we can still  do the same by install external lib to acheive same thing https://github.com/reduxjs/reselect

 ------------------------------------------------------------------------------------
Day 3

1. RTK Query
RTK Query is an advanced data fetching and caching tool, designed to simplify common cases for loading data in a web application. RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like `createSlice` and `createAsyncThunk` to implement its capabilities.