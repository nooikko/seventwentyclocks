import { Routes, Route} from 'react-router-dom';
import { Desktop, Home } from '../../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='desktop' element={<Desktop />} />
      </Route>
    </Routes>
  );
};
