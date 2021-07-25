import { Module } from "vuex";
import { RootState } from "@/store/root-state";
import { AppState } from "@/store/modules/app/state";
import { state } from "@/store/modules/app/state";
import { getters } from "@/store/modules/app/getters";
import { mutations } from "@/store/modules/app/mutations";
import { actions } from "@/store/modules/app/actions";

export const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
