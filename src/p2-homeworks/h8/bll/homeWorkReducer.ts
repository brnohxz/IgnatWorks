import {initialPeopleObject} from "../HW8";

export const homeWorkReducer = (state: initialPeopleObject[], action: MainType): initialPeopleObject[] => { // need to fix any
    switch (action.type) {
        // case 'sort': {
        //     // need to fix
        //     return state
        // }
        case 'CHECK': {
            // need to fix
            return state.filter(t => t.age > action.age)
        }
        case "SORT" : {
            let copyState = [...state]
            if (action.filterType === 'up') {
                return copyState.sort((prev, next) => prev.name > next.name ? 1 : -1)
            }
            if (action.filterType === 'down') {
                return copyState.sort((prev, next) => prev.name < next.name ? 1 : -1)
            }
        }
            return state
    }

}
type MainType = CheckACType | sortUpAC
type CheckACType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {type: "CHECK", age} as const
}
type sortUpAC = ReturnType<typeof sortUpAC>
export type sortUpACProps = 'up' | 'down'
export const sortUpAC = (filterType: sortUpACProps) => {
    return {type: "SORT", filterType} as const
}