import * as React from 'react';
import { Outlet, useParams } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './reset.css';
import './app.css';

export const GameIdContext = React.createContext<string>(undefined);

function App() {
  const params = useParams()
  const gameId = "g/" + params.owner + "/" + params.repo
  return (
    <div className="app">
      <GameIdContext.Provider value={gameId}>
        <Outlet />
      </GameIdContext.Provider>
    </div>
  )
}

export default App