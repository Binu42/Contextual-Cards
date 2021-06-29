import Navbar from 'components/Navbar'
import Home from "pages/Home"
import CardGroupState from "context/cardGroups/state"

function App() {
  return (
    <>
      <Navbar />
      <CardGroupState>
        <Home />
      </CardGroupState>
    </>
  );
}

export default App;
