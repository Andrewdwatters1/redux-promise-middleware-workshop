//Here we're brining in applyMiddleware from redux 
//it lets us make other packages aware of changes happening in the store
import {createStore, applyMiddleware} from 'redux' 
//redux-promise-middleware is the main package and promiseMiddleware is a function
import promiseMiddleware from 'redux-promise-middleware'

import reducer from './reducer'
//Here, we add a second argument to createStore invoked which is applyMiddleware invoked, passing in promiseMiddleware invoked
//There's a lot of chaining happening here but basically whatever is returned from promiseMiddleware() will be passed as the argument to applyMiddleware and whatever is returned from applyMiddleware is passed as the second argument to createStore
export default createStore(reducer, applyMiddleware( promiseMiddleware() ) )

//basic redux setup
// import {createStore} from 'redux'

// import reducer from './reducer'

// export default createStore(reducer)