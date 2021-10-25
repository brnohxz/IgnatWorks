import React from 'react'
import {Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
const onChangeHandler = (event: React.ChangeEvent<{}>, newValue: number | number[])=>{
    if(newValue){
        onChangeRange && onChangeRange(newValue as [number,number])
    }

}
    return (
        <>
            <Slider
                value={value}
                onChange={onChangeHandler}
                valueLabelDisplay="auto"
            />
        </>
    )
}

export default SuperDoubleRange
