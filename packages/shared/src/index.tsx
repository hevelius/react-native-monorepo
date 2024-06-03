import { createStore, combineReducers } from 'redux';
import { reducer as firstModuleReducer } from 'first-module';
import { reducer as secondModuleReducer } from 'second-module';

export type GlobalState = {
  firstModule: ReturnType<typeof firstModuleReducer>;
  secondModule: ReturnType<typeof secondModuleReducer>;
};

const rootReducer = combineReducers({
  firstModule: firstModuleReducer,
  secondModule: secondModuleReducer,
});

const store = createStore(rootReducer);

export default store;
