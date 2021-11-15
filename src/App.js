import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./components/AllMeetups";
import NewMeetupPage from "./components/NewMeetup";
import FavoritesPage from "./components/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
