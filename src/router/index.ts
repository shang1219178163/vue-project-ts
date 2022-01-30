import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HelloPage from "../views/HelloPage.vue";

const _import_ = (file: string) => () => import("../views/" + file + ".vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/",
    //   name: "helloPage",
    //   component: _import_("HelloPage.vue"),
    // },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/helloPage",
      name: "HelloPage",
      // component: HelloPage,
      component: () => import("../views/HelloPage.vue"),

    },
    // { path: "/helloPage", name: "helloPage", component: _import_("HelloPage") },
    { path: "/page/:id", name: "page", component: _import_("Page") },
    { path: "/pageSetup", name: "pageSetup", component: _import_("PageSetup") },
    { path: "/user", name: "user", component: _import_("UserList") },
    { path: "/grid", name: "grid", component: _import_("Grid") },
    { path: "/girdDemo", name: "girdDemo", component: _import_("GirdDemo") },
    {
      path: "/layoutTest",
      name: "layoutTest",
      component: _import_("LayoutTest"),
    },
    { path: "/flexDemo", name: "flexDemo", component: _import_("FlexDemo") },
    {
      path: "/tableViewDemo",
      name: "tableViewDemo",
      component: _import_("TableViewDemo"),
    },
    {
      path: "/layoutDemo",
      name: "layoutDemo",
      component: _import_("LayoutDemo"),
    },
    { path: "/domChange", name: "domChange", component: _import_("DomChange") },
    { path: "/compDemo", name: "compDemo", component: _import_("CompDemo") },
    { path: "/slotDemo", name: "slotDemo", component: _import_("SlotDemo") },
    { path: "/setupDemo", name: "setupDemo", component: _import_("SetupDemo") },
    {
      path: "/dataTransferDemo",
      name: "dataTransferDemo",
      component: _import_("DataTransferDemo"),
    },
    { path: "/tableDemo", name: "tableDemo", component: _import_("TableDemo") },
    { path: "/userlist", name: "userlist", component: _import_("UserList") },
    { path: "/userlist1", name: "userlist1", component: _import_("UserList1") },
    {
      path: "/alertSheetDemo",
      name: "AlertSheetDemo",
      component: _import_("AlertSheetDemo"),
    },
    {
      path: "/pullRefreshDemo",
      name: "PullRefreshDemo",
      component: _import_("PullRefreshDemo"),
    },
    {
      path: "/pullMoreDemo",
      name: "PullMoreDemo",
      component: _import_("PullMoreDemo"),
    },
    { path: "/sceneList", name: "sceneList", component: _import_("sceneList") },
    {
      path: "/vanConfigProvider",
      name: "VanConfigProvider",
      component: _import_("VanConfigProvider"),
    },
    { path: "/father", name: "Father", component: _import_("Father") },
  ],
});

export default router;
