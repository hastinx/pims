import React from 'react'

function Wellsummary() {
    return (
        <>
            <div className="card border-warning">
                <div className="card-header fw-semibold text-center text-dark bg-warning">
                    WELL SUMMARY
                </div>
                <div className="card-body" style={{ overflow: 'scroll' }}>
                    <table className="table table-bordered" >
                        <thead>
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">LAPANGAN</th>
                                <th scope="col">JUMLAH SUMUR BOR</th>
                                <th scope="col">PROD</th>
                                <th scope="col">INJEKSI AIR</th>
                                <th scope="col">SHUT IN</th>
                                <th scope="col">SUSPENDED</th>
                                <th scope="col">P&A</th>
                                <th scope="col">DRY HOLE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='table-success'>
                                <td>1</td>
                                <td>MUDI</td>
                                <td>26</td>
                                <td>14</td>
                                <td>4</td>
                                <td>1</td>
                                <td>5</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr className='table-success'>
                                <td>2</td>
                                <td>LENGOWANGI</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                                <td>2</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>NORTH WEST LENGOWANGI</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>SOUTH BUNGO</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>BOGOMIRING</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>RESIK</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>GONDANG</td>
                                <td>2</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>SUMBER</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>KARANG MUDI</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>KEMBANG BARU</td>
                                <td>2</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>2</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>NGASIN</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>WEST MUDI AREA</td>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>1</td>
                            </tr>
                            <tr className='table-primary'>
                                <td colSpan={2}>JUMLAH</td>
                                <td>43</td>
                                <td>15</td>
                                <td>4</td>
                                <td>5</td>
                                <td>9</td>
                                <td>7</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Wellsummary