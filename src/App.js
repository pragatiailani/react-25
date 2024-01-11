import Accordion from "./accordion/Accordion";
import ColourGenerator from "./colour-generator/ColourGenerator";
import StarRating from "./star-rating/StarRating";

function App() {
  return (
    <div className="App">
      <Accordion />      
      <ColourGenerator />      
      <StarRating noOfStars={10} />
    </div>
  );
}

export default App;
