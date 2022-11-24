import type { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { type Home ,home} from './home'
// 为 store state 声明类型
export interface State {
  home: Home
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({ 
  state: {
    home: home
  },
  modules:{
  }
})

export function useStore () {
  return baseUseStore(key)
}