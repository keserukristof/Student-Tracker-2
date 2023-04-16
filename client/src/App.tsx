import { FunctionComponent } from 'react';
import { Layout } from './components/common/Layout/layout.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Layout
        children={<div>ASD</div>}
      />
    </>
  );
};

export default App;
