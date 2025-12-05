import { Route, Routes } from "react-router"
import Layout from "./layout/Layout"
import AboutPage from "./page/AboutPage/AboutPage"
import TodoPage from "./page/TodoPage/TodoPage"
import ContactPage from "./page/ContactPage/ContactPage"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/todo" element={<TodoPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
