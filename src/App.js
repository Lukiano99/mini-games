import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import Game from "./components/Game";
import PageLayout from "./components/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: ":levelId", element: <Game /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
