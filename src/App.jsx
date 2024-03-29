import Accordion from "./accordion/Accordion";
import ColourGenerator from "./colour-generator/ColourGenerator";
import StarRating from "./star-rating/StarRating";
import ImageSlider from "./image-slider/ImageSlider";
import LoadMore from "./load-more/LoadMore";
import TreeView from "./tree-view-nav/TreeView";
import QRCodeGenerator from "./qr-code/QRCode";
import ChangeTheme from "./change-theme/ChangeTheme";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";
import TabsMain from "./multiple-tabs/TabsMain";
import ModalPopup from "./modal-popup/ModalPopup";
import GithubProfile from "./github-profile/GithubProfile";
import AutoComplete from "./search-autocomplete/AutoComplete";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import ScrollToBottom from "./scroll-to-position/ScrollToBottom";
import ScrollToTop from "./scroll-to-position/ScrollToTop";
import Weather from "./weather/Weather";

function App() {
  return (
    <div className="App">
      <ScrollToBottom />
      <Accordion />
      <ColourGenerator />
      <StarRating noOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      <LoadMore limit={10} />
      <TreeView />
      <QRCodeGenerator />
      <ChangeTheme />
      <ScrollIndicator />
      <TabsMain />
      <ModalPopup />
      <GithubProfile />
      <AutoComplete />
      <TicTacToe />
      <Weather />
      <ScrollToTop />
    </div>
  );
}

export default App;
