import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components';
import HomePage        from './pages/HomePage';
import FieldGuidePage  from './pages/FieldGuidePage';
import WalkthroughPage from './pages/WalkthroughPage';
import RoundupPage     from './pages/RoundupPage';
import ToolkitPage     from './pages/ToolkitPage';
import AboutPage       from './pages/AboutPage';
import WorkPage        from './pages/WorkPage';
import SubscribePage   from './pages/SubscribePage';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/field-guide"   element={<FieldGuidePage />} />
        <Route path="/field-guide/:slug" element={<WalkthroughPage />} />
        <Route path="/roundup"       element={<RoundupPage />} />
        <Route path="/toolkit"       element={<ToolkitPage />} />
        <Route path="/about"         element={<AboutPage />} />
        <Route path="/work-with-me"  element={<WorkPage />} />
        <Route path="/subscribe"     element={<SubscribePage />} />
      </Routes>
    </>
  );
}
