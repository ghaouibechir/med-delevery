// import
import Dashboard from "views/Dashboard/Dashboard.js";
import Tables from "views/Dashboard/Tables.js";


import SignIn from "views/Pages/SignIn.js";


import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
      path: "/signin",
      name: "Sign In",
      icon: <DocumentIcon color="inherit" />,
      component: SignIn,
      layout: "/auth",
    },
  {
    path: "/dashboard",
    name: "Dashboard",

    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",

    icon: <StatsIcon color="inherit" />,
    component: Tables,
    layout: "/admin",
  },




  {
    category: "account",
    rtlName: "صفحات",
    state: "pageCollapse",
    views: [
      //
      // {
      //   path: "/signup",
      //   name: "Sign Up",
      //   icon: <RocketIcon color="inherit" />,
      //   secondaryNavbar: true,
      //   component: SignUp,
      //   layout: "/auth",
      // },
    ],
  },
];
export default dashRoutes;
