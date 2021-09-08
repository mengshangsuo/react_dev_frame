import About from "../pages/About";
import AboutSon from "../pages/About/components/AboutSon";
import News from "../pages/About/components/News";
import Home from "../pages/Home/App";
import Test from "../pages/Test";

const RouterConfigObj = {
  home: {
    id: "1",
    component: Home,
    exact: true,
    path: "/",
  },
  about: {
    id: "2",
    component: About,
    exact: true,
    path: "/about",
    children: [
      {
        id: "2-1",
        component: AboutSon,
        exact: true,
        path: "/about/son",
      },
      {
        id: "2-2",
        component: News,
        exact: true,
        path: "/about/news/:id",
      }
    ]
  },
  test: {
    id: "3",
    component: Test,
    exact: true,
    path: "/test",
  },
};

export const routerConfig = Object.values(RouterConfigObj);
