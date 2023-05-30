import './App.css'
import Artist from './Artist';

function App() {
  return (
    <main>
      <div className="side"></div>

      <div className="center">
        <h1 className="section1">Recently Played</h1>
        <br />
        <Artist img="../src/assets/img/artistas/dillom/dillom_opa.jpg" name="Dillom" song="Opa" views="10M" />
        <Artist img="../src/assets/img/artistas/dillom/dillom_pelotuda.jpg" name="Dillom" song="Pelotuda" views="18M" />
        <Artist img="../src/assets/img/artistas/dillom/dillom_sauce.jpg" name="Dillom" song="Sauce" views="6M" />
      </div>

      <div className="bottom"></div>
    </main>
  );
}

export default App;
