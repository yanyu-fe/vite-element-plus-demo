import { createStore, createLogger } from "vuex";
const debug = import.meta.env.DEV;
import { app } from "@/store/modules/app";

const myStore = createStore({
  modules: {
    app,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});

export default myStore;
