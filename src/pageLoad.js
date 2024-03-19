import createHomePage from "./homePage";
import createTabs from "./tabs";

function initialLoad() {
  createTabs();
  createHomePage();
}

export default initialLoad;
