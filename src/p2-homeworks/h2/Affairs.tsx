import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import {Button} from "@material-ui/core";
// import {DataGrid, GridRowsProp, GridColDef} from '@material-ui/data-grid';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (affairs: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

// const columns: GridColDef[] = [
//     {field: 'col1', headerName: 'Column 1', width: 150},
//     {field: 'col2', headerName: 'Column 2', width: 150},
//     {field: 'col3', headerName: 'Column 3', width: 150},
// ];
//
// let rows: GridRowsProp = [
//     {}
// ];


function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // rows = props.data.map((a: AffairType) => (
    //     {id: a._id, col1: a.name, col2: a.priority}
    // ))


    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }



    return (
        <div>

            {/*<div style={{ height: 300, width: '100%' }}>*/}
            {/*    <DataGrid rows={rows} columns={columns} />*/}
            {/*</div>*/}


            <div>
                {mappedAffairs}
            </div>

            <div>
                <Button variant="contained" color="primary" onClick={setAll}>All</Button>
                <Button variant="contained" color="primary" onClick={setHigh}>High</Button>
                <Button variant="contained" color="primary" onClick={setMiddle}>Middle</Button>
                <Button variant="contained" color="primary" onClick={setLow}>Low</Button>
            </div>

            <div className="mdc-card">

            </div>


        </div>
    )
}

export default Affairs
