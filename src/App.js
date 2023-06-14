import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Github/Home';
import myContext, { CustomeContext } from './Components/Github/Context';
function App() {
  return (
    <div>
      <ChakraProvider>
        <CustomeContext>
        <Home />
        </CustomeContext>
      </ChakraProvider>
     
    </div>
  );
}

export default App;
