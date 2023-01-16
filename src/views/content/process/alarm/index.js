
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import MasterLayout from '../../../../components/Layout'
import ReactDatePicker from 'react-datepicker'
import Table from '../../../../components/Table'
import { useGetApi } from '../../../../server/Api'
import "react-datepicker/dist/react-datepicker.css";

const Alarm = () => {
    const [getDate, setDate] = useState(new Date())
    const [alarm, setAlaram] = useState([])
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
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <Table data={alarm} rowsPerPage={13} />
            </div>
        </MasterLayout>
    )
}

export default Alarm