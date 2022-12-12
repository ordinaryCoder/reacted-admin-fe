import { Box, Container } from '@mui/material';

import Register from '@/components/Forms/AddUser';
import { Meta } from '@/components/meta/Meta';
import { Main } from '@/templates/Main';

// list, view, edit, add
const Celebrity = () => (
  <Main meta={<Meta title="User List" description="User List" />}>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Register />
      </Container>
    </Box>
  </Main>
);

export default Celebrity;
