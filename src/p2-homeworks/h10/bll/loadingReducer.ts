const initState:initState = {
    isLoading:false
}
export type initState = {
    isLoading : boolean
}

export const loadingReducer = (state = initState, action: MainACType): initState => { // fix any
    switch (action.type) {
        case 'LOAD_STATUS': {
            let copyState = {...state}
            copyState.isLoading = action.loadStatus
            return copyState
        }
        default: return state
    }
}

type MainACType = LoadingAC
type LoadingAC = {type: 'LOAD_STATUS'
    loadStatus:boolean}
export const loadingAC = (loadStatus:boolean): LoadingAC => {
    return {type:'LOAD_STATUS',loadStatus}
} // fix any