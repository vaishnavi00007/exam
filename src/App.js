import { BrowserRouter, Routes, Route} from "react-router-dom";
import layout from "./components/layout";
import home from "./components/home";
import login from "./components/login";
import register from "./components/register";
import nopage from "./components/nopage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<layout />}>
          <Route index element={<home />} />
          <Route path="Login" element={<login />} />
          <Route path="Register" element={<register />} />
          <Route path="*" element={<nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </> 
  )
}
export default App;