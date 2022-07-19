import React from "react";
import * as XLSX from "xlsx";
import {
    Link
} from "react-router-dom";

export default function TopBar(props){
    const onChange = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();

        reader.onload = function(e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });

            workbook.SheetNames.forEach(function(sheetName) {

                    var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                    var json_object = JSON.stringify(XL_row_object);
                    if (sheetName==="Fournisseur")props.setFournisseur(XL_row_object);
                    else if (sheetName==="Colonnes")props.setCol(XL_row_object);
                    else
                        props.setExcel(XL_row_object)
                        props.setExcelMounth(sheetName,XL_row_object);
            })


        };
        reader.onerror = function(ex) {
            console.log(ex);
        };
        reader.readAsBinaryString(file);
    };

    return(<div className="TopBar--box">
            <h1 className="TopBar--case"><Link className="TopBar--link" to="/">Accueil</Link></h1>
            <h1 className="TopBar--case"><Link className="TopBar--link" to="saisie">Saisie</Link></h1>
            <h1 className="TopBar--case"><Link className="TopBar--link" to="facture">Facture</Link></h1>
            <h1 className="TopBar--case"><Link className="TopBar--link" to="graphic">Graphic</Link></h1>
            <input  className="TopBar--case" type="file" onChange={onChange} />
        </div>)
}
