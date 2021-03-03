import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default function configureStore(initialState: object) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middleware = [sagaMiddleware];
  const enhancers = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers.push(devToolsEnhancer({}));
  }
  return {
    ...createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware), ...enhancers)
    ),
    runSaga: sagaMiddleware.run,
  };
}

export type RootState = ReturnType<typeof rootReducer>;
