import VuetifyComponent from "@/components/practice/4.VuetifyComponent.vue";
import TestVue from "@/components/practice/0.TestVue.vue";
import ModelingComponent from "@/components/practice/1.ModelingComponent.vue";
import ConditionalComponent from "@/components/practice/2.ConditionalComponent.vue";
import HookComponent from "@/components/practice/3.HookComponent.vue";
import RouteComonent from "@/components/practice/5.RouteComonent.vue";
import RouteComonent2 from "@/components/practice/5.RouteComonent2.vue";
import RouteComonent3 from "@/components/practice/5.RouteComonent3.vue";
import StoreTestComponent from "@/components/practice/6.StoreTestComponent.vue";

export const practiceRouter = [
  { path: "/practice/test", name: "TestVue", component: TestVue },
  {
    path: "/practice/modeling",
    name: "ModelingComponent",
    component: ModelingComponent,
  },
  {
    path: "/practice/conditional",
    name: "ConditionalComponent",
    component: ConditionalComponent,
  },
  {
    path: "/practice/hook",
    name: "HookComponent",
    component: HookComponent,
  },
  {
    path: "/practice/vuetify",
    name: "VuetifyComponent",
    component: VuetifyComponent,
  },
  {
    path: "/practice/route",
    name: "RouteComponent",
    component: RouteComonent,
  },
  {
    path: "/practice/route2",
    name: "RouteComponent2",
    component: RouteComonent2,
  },
  {
    path: "/practice/route3/:postId",
    name: "RouteComponent3",
    component: RouteComonent3,
  },
  {
    path: "/practice/store",
    name: "StoreTestComponent",
    component: StoreTestComponent,
  },
];
