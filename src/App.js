import Accordian from './components/accordian';
import './App.css';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-button';
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";






function App() {

  return (
    <div className="App">

        {/* Accordian component */}
        {/* <Accordian /> */}

        {/* Random color component */}
        {/* <RandomColor /> */}

        {/* star rating component */}
        {/* <StarRating noOfStars={10} /> */}

        {/* image slider component */}
        {/* <ImageSlider url={"https://picsum.photos/v2/list"} 
           page={'2'}
             limit={'10'} /> */}

        {/* load more data component */}
        {/* <LoadMoreData /> */}

        {/* tree-view component/menu UI component/ recursive navigation menu */}
        {/* <TreeView menus={menus} /> */}

        {/* QR Code Generator */}
        {/* <QRCodeGenerator /> */}

        {/* light and dark theme switch */}
        {/* <LightDarkMode /> */}

        {/* Scroll indicator component */}
        {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

        {/* Customs tabs component */}
        {/* <TabTest /> */}

        {/* Custom Modal Component */}
        {/* <ModalTest /> */}

        {/* Github profile finder */}
        {/* <GithubProfileFinder /> */}

        {/* SearchAutocomplete */}
        {/* <SearchAutocomplete /> */}

        {/* Tic tac toe */}
        {/* <TicTacToe /> */}

        {/* Feature Flag IMplementation */}
        {/* <FeatureFlagGlobalState>
              <FeatureFlags />
         </FeatureFlagGlobalState> */}

        {/* useFetch - Custom Hook Test */}
        {/* <UseFetchHookTest /> */}

        {/* Use Onclick Outside Hook Test */}
        {/* <UseOnclickOutsideTest /> */}


        {/* Use Window Resize Hook Test */}
        {/* <UseWindowResizeTest /> */}

        {/* Scroll to Top and Bottom */}
        {/* <ScrollToTopAndBottom /> */}

        {/* Scroll to a Particular Section */}
         <ScrollToSection />



      </div>
  );
}

export default App;
