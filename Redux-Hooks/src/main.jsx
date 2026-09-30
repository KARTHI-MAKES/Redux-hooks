import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import store from './store/store.jsx'
import UseState from './useState/useState.jsx'
import UseEffectExample from './useEffect/useEffect.jsx'
import UserRef from './useRef/userRef.jsx'
import DebounceSearch from './debounceSearch/debounceSearch.jsx'
import UseMemo from './useMemo/useMemo.jsx'
import UseLayoutEffectExample from './useLayoutEffect/useLayoutEffect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <UseState/> */}
      {/* <UserRef/> */}
      {/* <DebounceSearch /> */}
      {/* <UseMemo/> */}
      <UseLayoutEffectExample />
    </Provider>
  </StrictMode>,
)
