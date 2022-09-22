import { Box} from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/LoginForm/LoginForm";
import Main from "./components/Main"

import "./App.css";

const App = () => {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
