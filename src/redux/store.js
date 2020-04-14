import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import appReducers from './reducers';

export const history = createBrowserHistory();
const reducer = combineReducers({
    router: connectRouter(history),
    ...appReducers

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState) {
    return createStore(
        reducer, // root reducer with router state
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                thunk
            ),
        ),
    );
}














