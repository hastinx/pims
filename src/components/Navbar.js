import React from 'react'
import { useLocation } from "react-router-dom";

function Navbar() {

    console.log('NAMA', window)
    const location = useLocation();
    const { pathname } = location;
    const path = pathname.split("/");
    return (
        <>
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className={path[1] === "home" ? "nav-link active" : "nav-link"} href="/home">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <a className={path[1] === "production-flow" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Flow Diagram
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[1] === "production-flow" ? "collapse show" : "collapse"} id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className={path[1] === "production-flow" ? "nav-link active" : "nav-link"} href="/production-flow">Production</a>
                                    {/* <a className="nav-link" href="#0">MUDI PAD</a> */}
                                </nav>
                            </div>
                            <div className="sb-sidenav-menu-heading">PROCESS</div>
                            <a className={path[2] === "overview" ? "nav-link active" : "nav-link"} href="/process/overview">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                OVERVIEW
                            </a>
                            <a className={path[2] === "mudipad-a" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsemudia" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                MUDI PAD A
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-a" ? "collapse show" : "collapse"} id="collapsemudia" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className={(path[2] === "mudipad-a" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} href="/process/mudipad-a/wellhead">Wellhead</a>
                                    <a className={(path[2] === "mudipad-a" && path[3] === "test-separator") ? "nav-link active" : "nav-link"} href="/process/mudipad-a/test-separator">Test Separator</a>
                                    <a className={(path[2] === "mudipad-a" && path[3] === "process-flow-diagram") ? "nav-link active" : "nav-link"} href="/process/mudipad-a/process-flow-diagram">Process Flow Diagram</a>
                                </nav>
                            </div>
                            <a className={path[2] === "mudipad-b" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                MUDI PAD B
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-b" ? "collapse show" : "collapse"} id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a className={(path[2] === "mudipad-b" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} href="/process/mudipad-b/wellhead">Wellhead</a>
                                    {/* <a className={(path[1] === "mudipad-b" && path[2] === "wellhead") ? "nav-link active" : "nav-link"} href="/mudipad-b/wellhead" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                        Wellhead
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="/">Login</a>
                                            <a className="nav-link" href="/">Register</a>
                                            <a className="nav-link" href="/">Forgot Password</a>
                                        </nav>
                                    </div> */}
                                </nav>
                            </div>
                            <a className={path[2] === "mudipad-c" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsemudic" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                MUDI PAD C
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-c" ? "collapse show" : "collapse"} id="collapsemudic" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className={(path[2] === "mudipad-c" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} href="/process/mudipad-c/wellhead">Wellhead</a>
                                </nav>
                            </div>
                            <a className={path[2] === "alarm" ? "nav-link active" : "nav-link"} href="/process/alarm">
                                <div className="sb-nav-link-icon"><i className="fas fa-exclamation-triangle"></i></div>
                                ALARM
                            </a>

                            <div className="sb-sidenav-menu-heading">REPORT</div>
                            <a className={path[2] === "chart" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsereportchart" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                GRAPHIC
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "chart" ? "collapse show" : "collapse"} id="collapsereportchart" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className={(path[2] === "chart" && path[3] === "mudipad-a") ? "nav-link active" : "nav-link"} href="/report/chart/mudipad-a">MUDI PAD A</a>
                                    <a className={(path[2] === "chart" && path[3] === "mudipad-b") ? "nav-link active" : "nav-link"} href="/report/chart/mudipad-b">MUDI PAD B</a>
                                    <a className={(path[2] === "chart" && path[3] === "mudipad-c") ? "nav-link active" : "nav-link"} href="/report/chart/mudipad-c">MUDI PAD C</a>
                                </nav>
                            </div>
                            <a className={path[2] === "data" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsereportdata" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                REPORTING
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "data" ? "collapse show" : "collapse"} id="collapsereportdata" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className={(path[2] === "data" && path[3] === "mudipad-a") ? "nav-link active" : "nav-link"} href="/report/data/mudipad-a">MUDI PAD A</a>
                                    <a className={(path[2] === "data" && path[3] === "mudipad-b") ? "nav-link active" : "nav-link"} href="/report/data/mudipad-b">MUDI PAD B</a>
                                    <a className={(path[2] === "data" && path[3] === "mudipad-c") ? "nav-link active" : "nav-link"} href="/report/data/mudipad-c">MUDI PAD C</a>
                                </nav>
                            </div>
                            {/* <div className="sb-sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Charts
                            </a>
                            <a className="nav-link" href="tables.html">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Tables
                            </a> */}
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        <p>{window.$name}</p>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar