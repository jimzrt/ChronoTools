import Dashboard from "views/admin/Dashboard.js";
import FontCrypto from "views/admin/FontCrypto.js";
import SavegameEditor from "views/admin/SavegameEditor.js";
import DefilterView from "views/admin/DefilterView.js";

const PageMap = {
  "/": {
    component: Dashboard,
    title: Dashboard.title,
    description: Dashboard.description,
    iconClass: "fas fa-tv",
  },
  "/font-crypto": {
    component: FontCrypto,
    title: FontCrypto.title,
    description: FontCrypto.description,
    iconClass: "fas fa-cog",
    category: "tool",
  },
  "/savegame": {
    component: SavegameEditor,
    title: SavegameEditor.title,
    description: SavegameEditor.description,
    iconClass: "fas fa-save",
    category: "tool",
  },
  "/defilter": {
    component: DefilterView,
    title: DefilterView.title,
    description: DefilterView.description,
    iconClass: "fas fa-save",
    category: "patch",
  },
  // "/tables": {
  //     component: Tables,
  //     title: tableTitle,
  //     iconClass: "fas fa-table"
  // },
  // "/maps": {
  //     component: Maps,
  //     title: mapsTitle,
  //     iconClass: "fas fa-map-marked-alt"
  // },
};

export default PageMap;
