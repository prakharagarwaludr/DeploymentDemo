import { compose, applyMiddleware } from 'redux';

export default function configureStore() {
    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            }) : compose;
    
    const enhancer = composeEnhancers(
        applyMiddleware()
    );
    //const store = createStore(rootReducer, enhancer);
    return enhancer;
}