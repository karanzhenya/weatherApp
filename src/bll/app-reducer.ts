export type AppActionsType = ReturnType<typeof setLoadingAC> | ReturnType<typeof setErrorAC>
export type AppInitialStateType = {
    isLoading: boolean,
    error: ErrorType
}
export type LoadingStatus = 'success' | 'error' | 'loading' | 'idle'
export type ErrorMessageType = {
    code: number,
    info: string,
    type: string
}
export type ErrorType = {
    error: any
}


const appInitialState: AppInitialStateType = {
    isLoading: false,
    error: {error: {code: 0, info: '', type: ''}}
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
export const setErrorAC = (error: ErrorType) => {
    return ({type: "SET-ERROR", error} as const)
}