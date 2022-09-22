import { Box, Stack } from '@mui/system';

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import RightBar from './Rightbar/Rightbar';
import Feed from './Feed/Feed';
import Add from './AddPost/AddPost';

const Main = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
      <Add />
    </Box>
  );
};

export default Main;
