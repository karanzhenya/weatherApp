export type AppActionsType = ReturnType<typeof setLoadingAC> | ReturnType<typeof setErrorAC>
export type AppInitialStateType = {
    isLoading: boolean,
    error: string
}
export type LoadingStatus = 'success' | 'error' | 'loading' | 'idle'

const appInitialState: AppInitialStateType = {
    isLoading: false,
    error: ''
}
export const AppReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case "SET-LOADING": {
            return {...state, isLoading: action.status}
        }
        case "SET-ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}

export const setLoadingAC = (status: boolean) => {
    return ({type: "SET-LOADING", status} as const)
}
export const setErrorAC = (error: string) => {
    return ({type: "SET-ERROR", error} as const)
}