import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Session } from '../App';
import UserPermission from '../utils/Session';

function Navbar() {

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
                            <Link className={path[1] === "home" ? "nav-link active" : "nav-link"} to="/home">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Overview
                            </Link>
                            <Link className={path[1] === "peta-lokasi" ? "nav-link active" : "nav-link"} to="/peta-lokasi">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Peta Lokasi
                            </Link>
                            <a className={path[1] === "production-flow" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Flow Diagram
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[1] === "production-flow" ? "collapse show" : "collapse"} id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className={path[1] === "production-flow" ? "nav-link active" : "nav-link"} to="/production-flow">Production</Link>
                                    <Link className={path[2] === "mudi" ? "nav-link active" : "nav-link"} to="/production-flow/mudi">MUDI</Link>

                                </nav>
                            </div>
                            <Link className={path[1] === "power-distribution" ? "nav-link active" : "nav-link"} to="/power-distribution">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Power Distribution
                            </Link>
                            <div className="sb-sidenav-menu-heading">PROCESS</div>

                            <Link className={path[2] === "well-summary" ? "nav-link active" : "nav-link"} to="/process/well-summary">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                WELL SUMMARY
                            </Link>
                            <a className={path[2] === "mudipad-a" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsemudia" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                MUDI PAD A
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-a" ? "collapse show" : "collapse"} id="collapsemudia" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className={(path[2] === "mudipad-a" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} to="/process/mudipad-a/wellhead">Wellhead</Link>
                                    <Link className={(path[2] === "mudipad-a" && path[3] === "test-separator") ? "nav-link active" : "nav-link"} to="/process/mudipad-a/test-separator">Test Separator</Link>
                                    <Link className={(path[2] === "mudipad-a" && path[3] === "process-flow-diagram") ? "nav-link active" : "nav-link"} to="/process/mudipad-a/process-flow-diagram">Process Flow Diagram</Link>
                                </nav>
                            </div>
                            <a className={path[2] === "mudipad-b" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                MUDI PAD B
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-b" ? "collapse show" : "collapse"} id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <Link className={(path[2] === "mudipad-b" && path[3] === "wellhead-b1") ? "nav-link active" : "nav-link"} to="/process/mudipad-b/wellhead-b1">Wellhead 1</Link>
                                    <Link className={(path[2] === "mudipad-b" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} to="/process/mudipad-b/wellhead">Wellhead 2</Link>
                                    <Link className={(path[2] === "mudipad-b" && path[3] === "test-separator") ? "nav-link active" : "nav-link"} to="/process/mudipad-b/test-separator">Test Separator</Link>

                                </nav>
                            </div>
                            <a className={path[2] === "mudipad-c" ? "nav-link active collapsed" : "nav-link collapsed"} href="#0" data-bs-toggle="collapse" data-bs-target="#collapsemudic" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                MUDI PAD C
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className={path[2] === "mudipad-c" ? "collapse show" : "collapse"} id="collapsemudic" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <Link className={(path[2] === "mudipad-c" && path[3] === "wellhead") ? "nav-link active" : "nav-link"} to="/process/mudipad-c/wellhead">Wellhead</Link>
                                    <Link className={(path[2] === "mudipad-c" && path[3] === "water-injector") ? "nav-link active" : "nav-link"} to="/process/mudipad-c/water-injector">Water Injector</Link>
                                    <Link className={(path[2] === "mudipad-c" && path[3] === "test-separator") ? "nav-link active" : "nav-link"} to="/process/mudipad-c/test-separator">Test Separator</Link>
                                    <Link className={(path[2] === "mudipad-c" && path[3] === "water-disposal") ? "nav-link active" : "nav-link"} to="/process/mudipad-c/water-disposal">Water Disposal System</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        <Session.Consumer>
                            {(value) => {
                                return value.name
                            }}
                        </Session.Consumer>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar