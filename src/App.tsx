import { Toaster } from '@/components/ui/sonner';
import HomePage from './pages/home.page';

function App() {
  return (
    <>
      <Toaster richColors position='top-right' />
      <HomePage />
    </>
  );
}

export default App;
