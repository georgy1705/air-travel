import Layout from "./hoc/Layout/Layout";
import Filter from "./components/Filter/Filter";
import TravelsList from "./containers/TravelsList/TravelsList";

function App() {
  return (
    <Layout>
      <Filter />
      <TravelsList />
    </Layout>
  );
}

export default App;
