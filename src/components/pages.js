import Dashboard, {
  title as dashboardTitle,
  description as dashboardDescription,
} from "views/admin/Dashboard.js";
import FontCrypto, {
  title as fontCryptoTitle,
  description as fontCryptoDescription,
} from "views/admin/FontCrypto.js";
import SavegameEditor, {
  title as savegameEditorTitle,
  description as savegameEditorDescription,
} from "views/admin/SavegameEditor.js";

const PageMap = {
  "/": {
    component: Dashboard,
    title: dashboardTitle,
    description: dashboardDescription,
    iconClass: "fas fa-tv",
  },
  "/font-crypto": {
    component: FontCrypto,
    title: fontCryptoTitle,
    description: fontCryptoDescription,
    iconClass: "fas fa-cog",
    category: "tool",
  },
  "/savegame": {
    component: SavegameEditor,
    title: savegameEditorTitle,
    description: savegameEditorDescription,
    iconClass: "fas fa-save",
    category: "tool",
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
