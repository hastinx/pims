import React, { useState } from "react";

import useTable from "../../hooks/useTabel";
import styles from "./table.module.css";
import TableFooter from "./TableFooter";

const Table = ({ data, rowsPerPage }) => {
    const cellStyle = (plantStatus) => {
        if (plantStatus === 'ALARM') {
            return styles.cellError
        } else {
            return styles.tableCell
        }
    }
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <table className={styles.table}>
                <thead className={styles.tableRowHeader}>
                    <tr>
                        <th className={styles.tableHeader}>Plant</th>
                        <th className={styles.tableHeader}>Tag Address</th>
                        <th className={styles.tableHeader}>Status</th>
                        <th className={styles.tableHeader}>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {slice.map((el) => (
                        <tr className={styles.tableRowItems} key={el.id}>
                            <td className={el.status === 0 ? styles.tableCell : styles.cellError}>{el.plant}</td>
                            <td className={el.status === 0 ? styles.tableCell : styles.cellError}>{el.tag_address}</td>
                            <td className={el.status === 0 ? styles.tableCell : styles.cellError}>{el.status === 0 ? 'NORMAL' : 'ALARM'}</td>
                            <td className={el.status === 0 ? styles.tableCell : styles.cellError}>{el.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default Table;