import { Container } from '@mui/material';

import { Meta } from '@/components/meta/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="lorem ipsum" description="lorem ipsum" />}>
      <Container>
        <h1>Boilerplate code for your Nextjs project with Material UI</h1>
      </Container>
    </Main>
  );
};

export default Index;
