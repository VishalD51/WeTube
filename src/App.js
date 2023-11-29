import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchContainer from "./components/WatchContainer";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Maincontainer />,
        },
        {
          path: "watch",
          element: <WatchContainer />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
