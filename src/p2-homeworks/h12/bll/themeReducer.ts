
export type themeType = 'dark' | 'red' | 'some'


export type initState = {
    theme:themeType

}
const initState: initState = {
    theme:'dark',

};

export const themeReducer = (state = initState, action: MainActionsType):initState  => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            let copyState = {...state}
            copyState.theme = action.newTheme
            return copyState;
        }
        default: return state;
    }
};
export type changeThemeCType = {
    type:'CHANGE_THEME'
    newTheme:themeType
}
export type MainActionsType = changeThemeCType

export const changeThemeC = (newTheme:themeType): changeThemeCType => {
    return {type:'CHANGE_THEME',newTheme}
};