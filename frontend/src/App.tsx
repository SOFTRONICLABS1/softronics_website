import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import mixpanelService from './services/mixpanel';

function App() {
  useEffect(() => {
    mixpanelService.init();
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;