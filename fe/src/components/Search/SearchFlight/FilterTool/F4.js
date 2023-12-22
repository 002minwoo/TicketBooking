import { useEffect, useRef, useState } from "react"
import { A } from "../SearchFlight"
import _ from "lodash"
import FilterRangeCostHotel from "../../../Filter/FilterRangeCostHotel"
import LimitCost from "../../SearchHotel/LimitCost"
import { useTranslation } from "react-i18next"

const F4= (props)=> {
    const {t }= useTranslation()
    const [opensuggest, setopensuggest]= useState(()=> false)
    const myRef= useRef()
    const outsidefunction= (e)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setopensuggest(()=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", outsidefunction)
        return ()=> document.removeEventListener("mousedown", outsidefunction)
    }, [])  
    return (
      <div className="sqo-1 dsuew-1" ref={myRef}>
        <div className="qra-1" onClick={()=> setopensuggest(()=> true)}>
          {t("Thêm bộ lọc")}
        </div>
        <div className="dko-1">
  
        </div>
        {
          opensuggest=== true &&
          <div className="dsqeo-1">
            <div className="ddoeqw-1">
              <div className="teai-1"> 
                {t("Tiện ích")}
              </div>
            </div>
            <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
              <A type={t("Hành lý")} />
            </div>
            <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
              <A type={t("Suất ăn")} />
            </div>
            <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
              <A type={t("Giải trí")} />
            </div>
            <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
              <A type="Wifi" />
            </div>
            <div className="dkwwewe-1" style={{width: "100%", height: 30, display: "flex", alignItems: "center", marginBottom: 6}}>
              <A type={t("Nguồn sạc / cổng USB")} />
            </div>
            <div>{t("Lọc tiền vé trong khoảng")} : </div>
            <br />
            <LimitCost list={props.resultsearch} />
            <FilterRangeCostHotel setListRange={props.setListRange} mincost={_.minBy(props.resultsearch, o=> o.cost_adult)} maxcost={_.maxBy(props.resultsearch, o=> o.cost_adult)} />
          </div>
        }
      </div>
    )
  }

export default F4