import { FunctionComponent } from 'react';
import { Layout } from './components/app-shell/Layout/layout.component';
import { Home } from './components/pages/Home/home.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Layout>
        <Home title="Home" />
      </Layout>
    </>
  );
};

export default App;
