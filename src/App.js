import Canvas from './components/Canvas';
import { processTurn, randomConfiguration } from './core/coreFunctions';
import { useEffect, useState } from "react";

const App = () => {

  const [currentConfiguration, setCurrentConfiguration] = useState(randomConfiguration())
  const [previousConfiguration, setPreviousConfiguration] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousConfiguration(currentConfiguration)
      setCurrentConfiguration(processTurn(currentConfiguration))
    }, 100);
    return () => clearInterval(interval);
  }, [currentConfiguration, previousConfiguration]);

  return (
    <div>
      <header class='flex items-start justify-start'>
        <h2>Game of Life</h2>
      </header>
      <br />
      <div class='flex items-start justify-start'>
        <Canvas configuration={currentConfiguration} setConfiguration={setCurrentConfiguration} previousConfiguration={previousConfiguration} setPreviousConfiguration={setPreviousConfiguration} />
      </div>
    </div>
  );
}

export default App;
