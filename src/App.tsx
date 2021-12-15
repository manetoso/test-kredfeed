import { Navigation } from "./routes/Navigation";
import { FormContextProvider } from './contexts/FormContext';

function App() {
  return (
    <FormContextProvider>
      <Navigation />
    </FormContextProvider>
  );
}

export default App;
