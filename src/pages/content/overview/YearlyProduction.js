import React from 'react'

const styles = {
    table: {
        width: '100%'
    },
    head: {
        backgroundColor: '#002c6c',
        border: '1px solid #000',
        borderColapse: 'colapse',
        textAlign: 'center',
        color: '#f7ff00'
    },
    data: {
        textAlign: 'right',
        border: '1px solid #000',
        borderColapse: 'colapse',
        paddingRight: '10px'
    },
    desc_yellow: {
        fontWeight: '600',
        backgroundColor: '#f7ff00',
        border: '1px solid #000',
        borderColapse: 'colapse',
        textAlign: 'center'
    },
    desc_green: {
        fontWeight: '600',
        border: '1px solid #000',
        borderColapse: 'colapse',
        textAlign: 'center',
        backgroundColor: '#219700'
    }
}

const YearlyProduction = () => {
    return (
        <>
            <div className="card border-secondary">
                <div className="card-header fw-semibold text-center text-white bg-secondary d-flex justify-content-between">
                    YEARLY PRODUCTION
                    <button className="btn btn-sm btn-primary left" >
                        <i className="fa fa-pencil fs-6" />
                    </button>
                </div>
                <div className="card-body">
                    <table style={styles.table}>
                        <tr>
                            <th style={styles.head}>DESCRIPTION</th>
                            <th style={styles.head}>Last Year <br /> 2022</th>
                            <th style={styles.head}>YTD <br /> 2023</th>
                        </tr>
                        <tr>
                            <td style={styles.desc_green}>OIL(BPOD)</td>
                            <td style={styles.data}>926,47</td>
                            <td style={styles.data}>970,50</td>
                        </tr>
                        <tr>
                            <td style={styles.desc_green}>LIFTING(BO)</td>
                            <td style={styles.data}>291511,86</td>
                            <td style={styles.data}>43000,00</td>
                        </tr>
                        <tr>
                            <td style={styles.desc_yellow}>GAS(MMSCFD)</td>
                            <td style={styles.data}>1,83</td>
                            <td style={styles.data}>1,71</td>
                        </tr>
                        <tr>
                            <td style={styles.desc_yellow}>GAS SALES(MMSCFD)</td>
                            <td style={styles.data}>0,70</td>
                            <td style={styles.data}>0,60</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    )
}

export default YearlyProduction