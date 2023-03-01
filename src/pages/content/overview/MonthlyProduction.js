import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { useGetApi } from "../../../server/Api";

const styles = {
  table: {
    width: "max-content",
  },
  head_width: {
    width: "200px",
    backgroundColor: "#002c6c",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    color: "#f7ff00",
  },
  data_width: {
    width: "100px",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "right",
    paddingLeft: "5px",
    paddingRight: "5px",
  },
  head: {
    backgroundColor: "#002c6c",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    color: "#f7ff00",
  },
  data: {
    textAlign: "right",
    border: "1px solid #000",
    borderColapse: "colapse",
    paddingRight: "5px",
    paddingLeft: "5px",
  },
  desc_yellow: {
    fontWeight: "600",
    backgroundColor: "#f7ff00",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
  },
  desc_green: {
    fontWeight: "600",
    border: "1px solid #000",
    borderColapse: "colapse",
    textAlign: "center",
    backgroundColor: "#219700",
  },
};

const MonthlyProduction = () => {
  const GetData = async () => {
    const data = await useGetApi("monthly_production");
    console.log("monthly :", data);
    if (data.error === false) {
      console.log("monthly :", data.data.values);
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Block Summary " + data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  useEffect(() => {
    GetData();
  }, []);
  return (
    <>
      <div className="card border-secondary">
        <div className="card-header fw-semibold text-center text-white bg-secondary d-flex justify-content-between">
          MONTLY PRODUCTION
          <button className="btn btn-sm btn-primary left">
            <i className="fa fa-pencil fs-6" />
          </button>
        </div>
        <div className="card-body">
          <div style={{ overflowX: "scroll", marginBottom: "7px" }}>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th className="" style={styles.head_width}>
                    DESCRIPTION
                  </th>
                  <th style={styles.head}>JAN</th>
                  <th style={styles.head}>FEB</th>
                  <th style={styles.head}>MAR</th>
                  <th style={styles.head}>APRIL</th>
                  <th style={styles.head}>MAY</th>
                  <th style={styles.head}>JUNI</th>
                  <th style={styles.head}>JULY</th>
                  <th style={styles.head}>AUG</th>
                  <th style={styles.head}>SEP</th>
                  <th style={styles.head}>OCT</th>
                  <th style={styles.head}>NOP</th>
                  <th style={styles.head}>DES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.desc_green}>OIL(BPOD)</td>
                  <td style={styles.data_width}>970,50</td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                  <td style={styles.data_width}></td>
                </tr>
                <tr>
                  <td style={styles.desc_green}>LIFTING(BO)</td>
                  <td style={styles.data}>43000,00</td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                </tr>
                <tr>
                  <td style={styles.desc_yellow}>GAS(MMSCFD)</td>
                  <td style={styles.data}>1,71</td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                </tr>
                <tr>
                  <td style={styles.desc_yellow}>GAS SALES(MMSCFD)</td>
                  <td style={styles.data}>0,60</td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                  <td style={styles.data}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonthlyProduction;
