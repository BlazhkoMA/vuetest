import { createStore } from 'vuex'
const store = createStore({
    state () {

        return {
            userItems: [],
            selectedItem: null
        }

    },
    mutations: {
        addToUserItem(state, payload){
            if(state.userItems.length < 6){
                state.userItems = [...state.userItems, payload]
            }
        },

        removeUserItem(state, payload){
            console.log(payload)
            state.userItems = state.userItems.filter(item => item.id !== payload)
        },

        setSelectedItem(state, payload) {
            state.selectedItem = payload
        }

    }
})

export default store;