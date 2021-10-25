import React, {ChangeEvent, useState} from "react";
import styles from './SuperColorPicker.module.css'


type ColorPickerPropsType = {
}

export const SuperColorPicker:React.FC<ColorPickerPropsType> = () => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    const [value,setValue] = useState()

    return <span className={styles.main}>
        <label style={{backgroundColor:`${value}`}}><input value={value} onChange={onChangeHandler} className={styles.colors} type='color'/></label>
        <input placeholder='HEX' value={value} onChange={onChangeHandler} className={styles.input} type="text"/>
    </span>
}