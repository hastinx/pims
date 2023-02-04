
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import MasterLayout from '../../../../components/Layout'
import ReactDatePicker from 'react-datepicker'
import Table from '../../../../components/Table'
import { useGetApi } from '../../../../server/Api'
import "react-datepicker/dist/react-datepicker.css";
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable'
import { useNavigate } from 'react-router-dom'
import logo from '../../../../assets/img/pims-logo.png'

const Alarm = () => {
    const [getDate, setDate] = useState(new Date())
    const [alarm, setAlaram] = useState([])
    const navigate = useNavigate()
    const GetDataAlarm = async () => {

        const data = await useGetApi('alarm');
        console.log(data.data)
        if (data.error === false) {
            setAlaram(data.data.values)
        } else {
            Swal.fire({
                title: 'Oops!',
                text: 'Alarm ' + data.message,
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }

    }

    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
    };
    const colstyle = {
        width: "30%"
    };
    const tableStyle = {
        width: "100%"
    };
    const json = [
        {
            id: 8418,
            start: "2021-10-25T00:00:00.000Z",
            end: "2021-10-25T00:00:00.000Z",
            duration: "03:00:00",
            name: "Absence/Holiday/Etc.",
            project: "VARIE",
            task: "Hours Off",
            comment: "PERMESSO"
        },
        {
            id: 8248,
            start: "2021-10-09T00:00:00.000Z",
            end: "2021-10-09T00:00:00.000Z",
            duration: "03:00:00",
            name: "INDRA - AST",
            project: "C_17_INDR_03",
            task: "Overtime",
            comment: "STRAORDINARIO"
        },
        {
            id: 8257,
            start: "2021-10-08T00:00:00.000Z",
            end: "2021-10-08T00:00:00.000Z",
            duration: "08:00:00",
            name: "Casillo",
            project: "C_17_BUSI_01",
            task: "Smart Working",
            comment: null
        }
    ];
    const handleExport = () => {
        console.log(alarm)
        const pdf = new jsPDF("p", "pt", "a4");
        const columns = [
            // "Id",
            "Plant",
            "Tag Address",
            "Date Time",
        ];
        var rows = [];

        for (let i = 0; i < alarm.length; i++) {
            /*for (var key in json[i]) {
              var temp = [key, json[i][key]];
              rows.push(temp);
            }*/
            var temp = [
                // alarm[i].id,
                alarm[i].plant,
                alarm[i].tag_address,
                alarm[i].created_at,
            ];
            rows.push(temp);
        }
        console.log(rows)
        console.log(columns)
        // pdf.text(235, 40, "Tabla de Prestamo");
        // pdf.autoTable(columns, rows, {
        //     startY: 65,
        //     theme: "grid",
        //     styles: {
        //         font: "times",
        //         halign: "center",
        //         cellPadding: 3.5,
        //         lineWidth: 0.5,
        //         lineColor: [0, 0, 0],
        //         textColor: [0, 0, 0]
        //     },
        //     headStyles: {
        //         textColor: [0, 0, 0],
        //         fontStyle: "normal",
        //         lineWidth: 0.5,
        //         lineColor: [0, 0, 0],
        //         fillColor: [166, 204, 247]
        //     },
        //     alternateRowStyles: {
        //         fillColor: [212, 212, 212],
        //         textColor: [0, 0, 0],
        //         lineWidth: 0.5,
        //         lineColor: [0, 0, 0]
        //     },
        //     rowStyles: {
        //         lineWidth: 0.5,
        //         lineColor: [0, 0, 0]
        //     },
        //     tableLineColor: [0, 0, 0]
        // });
        // autoTable(pdf, { html: '#my-table' })

        // Or use javascript directly:
        pdf.addImage(logo, 'PNG', 40, 20, 100, 20);
        autoTable(pdf, {
            head: [columns],
            body:
                rows
            // ...
            ,
            margin: { top: 50 },
        })
        // console.log(pdf.output("datauristring"));
        pdf.save("table.pdf");
    }
    useEffect(() => {
        GetDataAlarm()

    }, [])
    return (
        <MasterLayout>
            <div className="row mt-4">
                <div className='card'>
                    <div className='card-body d-flex justify-content-between'>
                        <input className='form-control ms-3' type='text' placeholder='Plant' />
                        <input className='form-control mx-3' type='text' placeholder='Tag Address' />
                        {/* <input className='form-control mx-3' type='datepic' placeholder='Date' /> */}
                        <ReactDatePicker className='form-control'
                            placeholderText='Date'
                            selected={getDate}
                            onChange={date => setDate(date)}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            isClearable
                            showYearDropdown
                            showMonthDropdown
                        />
                        <button className='btn btn-success btn-outline ms-3'><i className='fas fa-search'></i></button>
                        <button className='btn btn-success btn-outline ms-3' onClick={handleExport}><i className='fas fa-print'></i></button>

                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <Table data={alarm} rowsPerPage={13} id="my-table" />
            </div>
        </MasterLayout>
    )
}

export default Alarm