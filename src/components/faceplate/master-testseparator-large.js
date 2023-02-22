import React from "react";
import "./master-testseparator-large.css";
import Tankhorizontal from "../../assets/img/faceplate/ht.png";
import Horizontal from "./pipe/Horizontal";
import Vertical from "./pipe/Vertical";
import pcv from "../../assets/img/faceplate/pcv-run.png";
import pcvStop from "../../assets/img/faceplate/pcv-stop.png";
import ft from "../../assets/img/faceplate/ft.png";
import lcv from "../../assets/img/faceplate/lcv.png";
import Tankvertical from "../../assets/img/faceplate/vt.png";
import MonitorStatusOpenClose from "./labelMonitor/monitorStatusOpenClose";
import MonitorStatusNormalAlarm from "./labelMonitor/monitorStatusNormalAlarm";
import LabelTag from "./labelMonitor/labelTag";
import arrow from "../../assets/img/faceplate/arrow.png";
import MonitorStatusOpenCloseBDV from "./labelMonitor/monitorStatusOpenCloseBDV";

function Testseparatorlarge(props) {
  return (
    <>
      <div className="card border-secondary large" style={{}}>
        <div className="card-header fw-semibold text-center text-white bg-secondary">
          {props.title}
        </div>
        <div className="card-body bg-gray">
          <div className="wrapper">
            <div>
              <img
                className="large-testseparator-tank-horizontal"
                src={Tankhorizontal}
                alt=""
              />
            </div>
            <div className="d-flex">
              <div className="d-flex flex-column">
                <div className="large-testseparator-vertical-left-one">
                  <Vertical />
                </div>
                <div className="large-testseparator-vertical-left-two">
                  <Vertical />
                </div>
              </div>
              <img
                className="large-testseparator-pcv-bdv1151"
                src={props.bdvStatus === 1 ? pcv : pcvStop}
                alt=""
              />
              <img
                className="large-testseparator-pcv-esdv1151"
                src={props.esdv1Status === 1 ? pcv : pcvStop}
                alt=""
              />
              <div className="large-testseparator-horizontal-top">
                <Horizontal />
              </div>
              <div className="large-testseparator-label-in">
                {props.inputFrom}
              </div>
              <div className="large-testseparator-label-to-1">
                {props.toOne}
              </div>
              <div className="large-testseparator-label-to-2">
                {props.toTwo}
              </div>
              <div className="large-testseparator-label-to-3">
                {props.toThree}
              </div>
              <div className="large-testseparator-label-to-4">
                {props.toFour}
              </div>
              <div className="large-testseparator-label-to-5">
                {props.toFive}
              </div>
              <div className="large-testseparator-label-to-6">
                {props.toSix}
              </div>
              <div className="large-testseparator-label-to-7">
                {props.toSeven}
              </div>
              <div className="large-testseparator-label-to-8">
                {props.toEight}
              </div>
              <div className="large-testseparator-label-to-9">
                {props.toNine}
              </div>
              <div className="large-testseparator-horizontal-bottom-one">
                <Horizontal />
              </div>
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-1"
              />
              <div className="large-testseparator-horizontal-bottom-two">
                <Horizontal />
              </div>
              <div className="large-testseparator-monitor-status-1">
                <MonitorStatusOpenCloseBDV
                  status={props.bdvStatus}
                  tag_name={props.tag_bdv}
                />
              </div>
              <div className="large-testseparator-monitor-status-2">
                <MonitorStatusOpenClose
                  status={props.esdv1Status}
                  tag_name={props.tag_esdv1}
                />
              </div>
              <div className="large-testseparator-monitor-status-3">
                <MonitorStatusNormalAlarm
                  status={props.pshhStatus}
                  tag_name={props.tag_pashh}
                />
              </div>
              <div className="large-testseparator-monitor-status-4">
                <MonitorStatusNormalAlarm
                  status={props.lshh1Status}
                  tag_name={props.tag_lshh1}
                />
              </div>
              <div className="large-testseparator-monitor-status-5">
                <MonitorStatusOpenClose
                  status={props.esdv2Status}
                  tag_name={props.tag_asdv2}
                />
              </div>
              <div className="large-testseparator-label-tank-separator">
                {props.labelTankSeparator}
              </div>
              <div className="large-testseparator-tag-tank-separator">
                {props.TagTankSeparator}
              </div>
              <div className="large-testseparator-label-tag-1">
                <LabelTag tag={props.tag_ft_1} />
              </div>
              <div className="large-testseparator-label-tag-2">
                <LabelTag tag={props.tag_ft_2} />
              </div>
              <div className="large-testseparator-label-tag-3">
                <LabelTag tag={props.tag_ft_3} />
              </div>
              <div className="large-testseparator-label-tag-4">
                <LabelTag tag={props.tag_ft_4} />
              </div>
              <div className="large-testseparator-label-tag-5">
                <LabelTag tag={props.tag_pcv_1} />
              </div>
              <div className="large-testseparator-label-tag-6">
                <LabelTag tag={props.tag_pcv_2} />
              </div>
              <div className="large-testseparator-label-tag-7">
                <LabelTag tag={props.tag_lcv_1} />
              </div>
              <div className="large-testseparator-label-tag-8">
                <LabelTag tag={props.tag_lcv_2} />
              </div>
              <div className="large-testseparator-vertical-left-three">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-bottom-to-tank">
                <Horizontal />
              </div>
              <div className="large-testseparator-vertical-top-to-separator">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-top-one-to-separator">
                <Horizontal />
              </div>
              <div className="large-testseparator-vertical-top-to-wellpad-vessel-one">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-top-one-to-wellpad-vessel-one">
                <Horizontal />
              </div>

              <div className="large-testseparator-vertical-right-to-wellpad-vessel-one">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-right-one-to-wellpad-vessel-one">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-lcv-right-one-to-wellpad-vessel-one"
                src={lcv}
                alt=""
              />
              <div className="large-testseparator-horizontal-right-two-to-wellpad-vessel-one">
                <Horizontal />
              </div>
              <div className="large-testseparator-vertical-right-one-to-wellpad-vessel-one">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-right-bypass-one-to-wellpad-vessel-one">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-lcv-right-bypass-one-to-wellpad-vessel-one"
                src={lcv}
                alt=""
              />
              <div className="large-testseparator-horizontal-right-bypass-two-to-wellpad-vessel-one">
                <Horizontal />
              </div>

              <div className="large-testseparator-vertical-right-two-to-wellpad-vessel-one">
                <Vertical />
              </div>
              <div className="large-testseparator-vertical-bottom-one-to-wellpad-vessel-two">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-bottom-one-to-wellpad-vessel-two">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-ft-bottom-one-to-wellpad-vessel-two"
                src={ft}
                alt=""
              />
              <div className="large-testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-two">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-two">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-ft-bottom-one-bypass-to-wellpad-vessel-two"
                src={ft}
                alt=""
              />
              <div className="large-testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-two">
                <Horizontal />
              </div>

              <div className="large-testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-two">
                <Vertical />
              </div>
              <div className="large-testseparator-horizontal-bottom-two-to-wellpad-vessel-two">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-lcv-bottom-one-to-wellpad-vessel-two"
                src={lcv}
                alt=""
              />
              <div className="large-testseparator-horizontal-bottom-three-to-wellpad-vessel-two">
                <Horizontal />
              </div>
              {/*TO WELLPAD VESSEL THREE (BOTTOM) */}
              <div className="large-testseparator-vertical-bottom-one-to-wellpad-vessel-three">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-bottom-one-to-wellpad-vessel-three">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-ft-bottom-one-to-wellpad-vessel-three"
                src={ft}
                alt=""
              />
              <div className="large-testseparator-vertical-bottom-one-bypass-to-wellpad-vessel-three">
                <Vertical />
              </div>

              <div className="large-testseparator-horizontal-bottom-one-bypass-to-wellpad-vessel-three">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-ft-bottom-one-bypass-to-wellpad-vessel-three"
                src={ft}
                alt=""
              />
              <div className="large-testseparator-horizontal-bottom-two-bypass-to-wellpad-vessel-three">
                <Horizontal />
              </div>

              <div className="large-testseparator-vertical-bottom-two-bypass-to-wellpad-vessel-three">
                <Vertical />
              </div>
              <div className="large-testseparator-horizontal-bottom-two-to-wellpad-vessel-three">
                <Horizontal />
              </div>
              <img
                className="large-testseparator-lcv-bottom-one-to-wellpad-vessel-three"
                src={lcv}
                alt=""
              />
              <div className="large-testseparator-horizontal-bottom-three-to-wellpad-vessel-three">
                <Horizontal />
              </div>
              <div className="large-testseparator-vertical-bottom-tank">
                <Vertical />
              </div>
              <div className="large-testseparator-vertical-bottom-tank-to-wellhead-manifold">
                <Vertical />
              </div>

              <img
                src={Tankvertical}
                alt=""
                className="large-testseparator-tank-vertical"
              />
              <img
                className="large-testseparator-esdv"
                src={props.esdv2Status === 1 ? pcv : pcvStop}
                alt=""
              />
              <div className="large-testseparator-vertical-top-tank">
                <Vertical />
              </div>
              {/* <div className="large-testseparator-monitor-status-6">
                                <MonitorStatusNormalAlarm status="ALARM" tag_name="LSHH-6005" tag={props.tag_lshh_gauging} />
                            </div> */}
              <div className="large-testseparator-monitor-status-6">
                <MonitorStatusNormalAlarm
                  status={props.lshh2Status}
                  tag_name={props.tag_lshh2}
                />
              </div>
              <div className="large-testseparator-label-tank-gauging">
                {props.labelTankGauging}
              </div>
              <div className="large-testseparator-tag-tank-gauging">
                {props.tagTankGauging}
              </div>
              <div className="large-testseparator-horizontal-top-tank-to-flare">
                <Horizontal />
              </div>
              <div className="large-testseparator-vertical-top-tank-to-flare">
                <Vertical />
              </div>
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-2"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-3"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-4"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-5"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-6"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-7"
              />
              <img
                src={arrow}
                alt="arrow-input"
                className="large-testseparator-arrow-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testseparatorlarge;
