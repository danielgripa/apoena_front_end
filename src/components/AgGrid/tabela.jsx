import React from 'react';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import faturas from "../../data/faturas.json";

const Table =() => {
    const data = faturas

    const colunas = [
        {headerName: "Valor", field: "valor"},
        {headerName: "Status", field: "status"},
        {headerName: "DataV", field: "data_vencimento"},
        {headerName: "DataC", field: "data_criacao"},
        {headerName: "Tipo", field: "tipo"},
        {headerName: "Nome", field: "nome_cliente"},
        ]
    return (
        <div className="ag-theme-alpine"
             style={{height: 600, width: 1200}}>
            <AgGridReact
                rowData={data}
                columnDefs={colunas}>
            </AgGridReact>
        </div>)
}

export default Table