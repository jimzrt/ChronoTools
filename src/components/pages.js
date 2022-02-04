import Dashboard, {title as dashboardTitle, description as dashboardDescription} from "views/admin/Dashboard.js";
import FontCrypto, {title as fontCryptoTitle, description as fontCryptoDescription} from "views/admin/FontCrypto.js";
// import Maps, {title as mapsTitle} from "views/admin/Maps.js";
// import Tables, {title as tableTitle} from "views/admin/Tables.js";


const pageMap = {
    "/ChronoTools": {
        component: Dashboard,
        title: dashboardTitle,
        description: dashboardDescription,
        iconClass: "fas fa-tv"
    },
    "/ChronoTools/font-crypto": {
        component: FontCrypto,
        title: fontCryptoTitle,
        description: fontCryptoDescription,
        iconClass: "fas fa-cog",
        category: "tool"
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

export default pageMap;
