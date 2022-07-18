import React from "react";
import * as XLSX from "xlsx";

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
                if (sheetName==="Fournisseur")props.setFournisseur(json_object);
                else if (sheetName==="Colonnes")props.setCol(json_object);
                else
                    props.setExcel(json_object)
                    console.log(sheetName)
                    props.setExcelMounth(sheetName,json_object);
            })

        };
        reader.onerror = function(ex) {
            console.log(ex);
        };
        reader.readAsBinaryString(file);
    };

    return(<div className="TopBar--box">
            <h1 className="TopBar--case" onClick={()=>props.choosePage(0)}>Accueil</h1>
            <h1 className="TopBar--case" onClick={()=>props.choosePage(1)}>Saisie</h1>
            <h1 className="TopBar--case" onClick={()=>props.choosePage(2)}>Facture</h1>
            <h1 className="TopBar--case" onClick={()=>props.choosePage(3)}>Graphic</h1>
            <input  className="TopBar--case" type="file" onChange={onChange} />
        </div>)
}
