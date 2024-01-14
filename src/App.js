import Accordion from "./accordion/Accordion";
import ColourGenerator from "./colour-generator/ColourGenerator";
import ImageSlider from "./image-slider/ImageSlider";
import LoadMore from "./load-more/LoadMore";
import StarRating from "./star-rating/StarRating";

function App() {
  return (
    <div className="App">
      <Accordion />      
      <ColourGenerator />      
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMore limit={10}/>
    </div>
  );
}

export default App;
