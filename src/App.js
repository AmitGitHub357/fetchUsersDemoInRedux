import { Provider } from "react-redux"
import store from "./redux/store"
// import Cake_Container from "./components/cakeContainer"
// import Ice_Container from "./components/iceContainer"
// import HooksCakeContainer from "./components/hookCakeContainer"
// import NewCakeContainer from "./components/newCakeContainer"
import UserContainer from "./components/userContainer"

function App() {
  return (
    <div>
      <Provider store={ store }>
        <UserContainer />
        {/* <Cake_Container />
        <HooksCakeContainer />
        <Ice_Container />
        <NewCakeContainer /> */}
      </Provider>
    </div>
  )
}

export default App
