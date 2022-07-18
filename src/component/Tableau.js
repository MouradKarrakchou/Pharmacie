import React from "react"
import {Grid, GridColumn, GridToolbar} from "@progress/kendo-react-grid";
import {ExcelExport} from "@progress/kendo-react-excel-export";
import products from "./products.json";
import '@progress/kendo-theme-default/dist/all.css';

export default function Tableau(props){
    const _export = React.useRef(null);

    const excelExport = () => {
        if (_export.current !== null) {
            _export.current.save();
        }
    };
    const jsonExcel=JSON.parse(props.excel)
    const jsonCol=JSON.parse(props.col)
    console.log(jsonCol)
    function transform(){
        return(jsonCol.map(
            col=>{
                return( <GridColumn field={`${col.Col}`} title={`${col.Col}`} width="100px"/>)
            }
        ))
    }
    console.log(transform())
    return (
        <ExcelExport data={jsonExcel} ref={_export}>
            <Grid
                data={jsonExcel}
                style={{
                    height: "420px",
                }}
            >
                <GridToolbar>
                    <button
                        title="Export Excel"
                        className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-primary"
                        onClick={excelExport}
                    >
                        Export to Excel
                    </button>
                </GridToolbar>
                {transform()}


            </Grid>
        </ExcelExport>
    );

}

