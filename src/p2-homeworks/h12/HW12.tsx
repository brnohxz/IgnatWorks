import React, {useState} from "react";
import s from "./HW12.module.css";
import {SuperColorPicker} from "./SuperColorPicker";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, initState, themeType} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType,themeType>(state=>state.theme.theme)
    // useDispatch, onChangeCallback
    const dispatch = useDispatch()

    const onChangeTheme = (theme:themeType) => {
        dispatch(changeThemeC(theme))

    }

    return (<>
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <hr/>

        </div>
            <SuperSelect options={['dark','red','some']} onChangeOption={onChangeTheme}/>
        </>
    );
}

export default HW12;
