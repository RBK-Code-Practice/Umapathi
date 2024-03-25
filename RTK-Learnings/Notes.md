
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
## Day 3

1. RTK Query

- RTK Query is an advanced data fetching and caching tool.
- RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like `createSlice` and `createAsyncThunk` to implement its capabilities.

2. createApi()
   Creates a `service` to use in your application.

3. fetchBaseQuery()
  This is a very small wrapper around `fetch` that aims to simplify requests.

4. reducerPath
- The reducerPath is a `unique key` that your service will be mounted to in your store.
- If you call `createApi` more than once in your application.you will need to provide a unique value each time. 
- Defaults to `api`.

#####

1. queryFn()
- Can be used in place of query as an inline function that bypasses baseQuery completely for the endpoint.
 Example scenarios: 3rd party API calls

2. setupListeners
- A utility used to enable 'refetchOnMount' and 'refetchOnReconnect' behaviors. 
- It requires the dispatch method from your store. 
- Calling setupListeners(store.dispatch) will configure listeners with the recommended defaults, but you have the option of providing a callback for more granular control.

@example

setupListeners(store.dispatch)
@param dispatch — The dispatch method from your store

@param customHandler — An optional callback for more granular control over listener behavior

3. refetchOnReconnect
- Defaults to false.
- This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.

4. refetchOnfocus
- Defaults to false.
- This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.


----

## Default Catch behaviour
## Refetch Example
## Conditional Fetching
## Pagination

1. Default Catch behaviour
- When data is fetched from the server, RTK Query will store the data in the Redux store as a 'cache'
- When an additional request is performed for the same data, RTK Query will provide the existing cached data rather than sending an additional request to the server.

Example Use case : Reduces Redundant requests to server

    1.1 Manipulating Cache Behavior
    >> `keepUnusedDataFor`, default cache data stored for 60 seconds, we can configure this.

2. Automated Re-fetching
- Calling the refetch function will force refetch the associated query.
- As seen in above `Default Cache Behavior`, a request will be sent only if the cache data does not already exist. If it exists, the existing data will be served instead.
- RTK Query uses a "cache tag" system to automate re-fetching for query endpoints that have data affected by mutation endpoints.

3. Conditional Fetching
`skip`

- The purpose of the skip parameter in RTK Query is to conditionally control whether a query should be executed or skipped based on specific conditions. 

- By setting skip: true, you can prevent the query from running automatically, delaying its execution until the condition changes to false. 

- This feature is particularly useful for scenarios where you want to defer data fetching until certain events occur, optimizing performance and data loading strategies within your application.









-----

