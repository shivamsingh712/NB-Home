import "./App.css";
import MainLayout from "./layout/MainLayout";
import { HomePage } from "./pages/index";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/contact" element={<ContactPage />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
