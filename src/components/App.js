
// import React from "react";
// import './../styles/App.css';

// const App = () => {
//   return (
//     <div>
//         {/* Do not remove the main div */}
//     </div>
//   )
// }

// export default App;
import { Provider } from 'react-redux';
import store from './store';
import UserProfile from './UserProfile';

const App=()=> {
  return (
    <Provider store={store}>
      <div className="App">
        <UserProfile />
      </div>
    </Provider>
  );
}

export default App;
