import React from 'react'
import {checkAC, homeWorkReducer, sortUpAC} from '../homeWorkReducer'
import {initialPeopleObject} from "../../HW8";

let initialState: initialPeopleObject[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUpAC('up'))

    console.log(newState)
    expect(newState[0].name).toBe('Александр')
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, sortUpAC('down'))
    expect(newState[0].name).toBe('Кот')

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, checkAC(18))
    expect(newState.length).toBe(4)

})
