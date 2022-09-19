import { Box, Stack } from "@mui/system";

import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Rightbar from "./Rightbar/Rightbar";
import Feed from "./Feed/Feed";
import Add from "./Add/Add";


const Main = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </Box>
  );
};

export default Main;
