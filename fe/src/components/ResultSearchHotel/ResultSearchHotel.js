import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import useQuery from '../../f/get_query_parameter'
import HotelIcon from '../component/HotelIcon'
import LocationIcon from '../component/LocationIcon'
import StarReview from '../component/StarReview'
import CostHotelDiscount from './CostHotelDiscount'
import CostHotel from './CostHotelWithoutDiscount'
import LocationHotel from './LocationHotel'
import NameHotel from './NameHotel'
import PhotoHotel from './PhotoHotel'
import TypeHotel from './TypeHotel'
import * as Scroll from "react-scroll"
import { useTranslation } from 'react-i18next'

const ResultSearchHotel = (props) => {
    const { t } = useTranslation()
    let scroll = Scroll.animateScroll
    const query = useQuery()
    const location = useLocation()
    return (
        <div className='sfjepeqkpoqwow'>
            <PhotoHotel photo_hotel={props.photo_hotel} />
            <div className='fjkdrwaejeioaw'>
                <NameHotel name_hotel={props.name_hotel} />
                <div className='jeoiejrirjioewjioejsiowep'>
                    <TypeHotel type={props.type} />
                    <div className='jiarjawieairotioewaeksoas'>
                        {
                            Array.from(Array(props?.review).keys()).map(item => <StarReview key={item} />)
                        }
                    </div>
                </div>
                <div className='fpoiopedfopsfdkgopdsdfdsef'>
                    <LocationIcon />
                    <LocationHotel detail_location={props.detail_location} location={props.location} />
                </div>
                {
                    props.c_timedestination && props.c_timedestination &&
                    <>
                        <div style={{ marginBottom: 5 }}><span style={{ color: "#2e89ff" }}>{t("Đã bao gồm vé máy bay")} </span><svg strokeWidth="0" width="16" height="16" viewBox="0 0 16 16" fill="#30C5F7" className="iY9UL" stroke="currentColor" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ marginTop: 5 }}><path d="M7.97519062,3.89887963 L9.29787304,4.16341611 L12.5147829,1.36408588 C13.1061887,0.849449082 14.0084562,0.88578563 14.5615507,1.43888015 C15.115568,1.99289744 15.1490535,2.89645793 14.6363449,3.48564789 L11.8370147,6.70255777 L12.1015995,8.0254816 C12.3855429,7.83462442 12.7707202,7.86198761 13.0214373,8.11270469 C13.3049644,8.39623173 13.3072037,8.85368053 13.0166276,9.14425665 L12.4405667,9.72031757 L13.2199838,13.6174035 C13.3846893,14.4409306 12.2524962,14.840115 11.8642747,14.0953943 L9.22619986,9.03480726 L7.3146526,10.7330129 C7.17480341,10.8449531 6.97654708,10.9616287 6.7182918,11.0354403 C6.66582359,11.0504362 6.61309154,11.0627362 6.56025805,11.072242 L6.56025805,14.2731581 C6.56025805,15.0095007 5.59053285,15.278099 5.21168772,14.6466905 L3.76495746,12.2354734 L1.35374034,10.7887431 C0.722331805,10.409898 0.990930136,9.44017277 1.7272727,9.44017277 L4.92818886,9.44017277 C4.93769465,9.38733928 4.9499946,9.33460722 4.96499048,9.28213902 C5.0388021,9.02388374 5.15547775,8.8256274 5.29159003,8.65712805 L6.96538742,6.77410785 L1.90503647,4.13615614 C1.16031582,3.74793462 1.55950022,2.61574155 2.38302735,2.78044697 L6.28011324,3.55986415 L6.85617417,2.98380322 C7.14235754,2.69761985 7.60222239,2.69348977 7.88772612,2.9789935 C8.13710273,3.22837011 8.16887219,3.61229444 7.97519062,3.89887963 L7.97519062,3.89887963 Z"></path></svg></div>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{t("Combo giá tiết kiệm")}: <strong style={{ fontSize: 20, color: "#2e89ff" }}>{(parseInt(props.cost_adult_flight) + parseInt(props.cost_adult_hotel) - parseInt(Math.floor(Math.random() * (100 - 1 + 1)) + 1) * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</strong>&nbsp;<span style={{ color: "#555", textDecorationLine: "line-through", fontSize: 15 }}>{(parseInt(props.cost_adult_flight) + parseInt(props.cost_adult_hotel)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</span></div>
                    </>
                }
            </div>

            <div className='djfjlejwioejqi' style={{ marginLeft: 8, padding: 8 }}>
                <HotelIcon />
                <div className='fkfapwokwopewaw'>
                    {
                        props.ooo === true &&
                        <div style={{ color: "#000", fontSize: 12, fontWeight: 400 }}><span style={{ marginRight: 5 }}>
                            {t("Không bao gồm vé máy bay")}</span><svg strokeWidth="0" width="16" height="16" viewBox="0 0 16 16" fill="#30C5F7" className="iY9UL" stroke="currentColor" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ marginTop: 5 }}><path d="M7.97519062,3.89887963 L9.29787304,4.16341611 L12.5147829,1.36408588 C13.1061887,0.849449082 14.0084562,0.88578563 14.5615507,1.43888015 C15.115568,1.99289744 15.1490535,2.89645793 14.6363449,3.48564789 L11.8370147,6.70255777 L12.1015995,8.0254816 C12.3855429,7.83462442 12.7707202,7.86198761 13.0214373,8.11270469 C13.3049644,8.39623173 13.3072037,8.85368053 13.0166276,9.14425665 L12.4405667,9.72031757 L13.2199838,13.6174035 C13.3846893,14.4409306 12.2524962,14.840115 11.8642747,14.0953943 L9.22619986,9.03480726 L7.3146526,10.7330129 C7.17480341,10.8449531 6.97654708,10.9616287 6.7182918,11.0354403 C6.66582359,11.0504362 6.61309154,11.0627362 6.56025805,11.072242 L6.56025805,14.2731581 C6.56025805,15.0095007 5.59053285,15.278099 5.21168772,14.6466905 L3.76495746,12.2354734 L1.35374034,10.7887431 C0.722331805,10.409898 0.990930136,9.44017277 1.7272727,9.44017277 L4.92818886,9.44017277 C4.93769465,9.38733928 4.9499946,9.33460722 4.96499048,9.28213902 C5.0388021,9.02388374 5.15547775,8.8256274 5.29159003,8.65712805 L6.96538742,6.77410785 L1.90503647,4.13615614 C1.16031582,3.74793462 1.55950022,2.61574155 2.38302735,2.78044697 L6.28011324,3.55986415 L6.85617417,2.98380322 C7.14235754,2.69761985 7.60222239,2.69348977 7.88772612,2.9789935 C8.13710273,3.22837011 8.16887219,3.61229444 7.97519062,3.89887963 L7.97519062,3.89887963 Z"></path></svg></div>
                    }

                    <>
                        {
                            parseInt(props.discount) > 0 ?
                                <>
                                    <CostHotelDiscount cost_adult={props.cost_adult} discount={props.discount} />

                                    {
                                        props.xxxx !== true &&
                                        <>
                                            {
                                                props.ooo === true ?
                                                    <Link to={"/booking/v2/" + props.id_hotel} style={{ textDecoration: "none", userSelect: "none" }} state={{ time: location.state.time, count_customer: location.state.count_customer, room: location.state.room, detail_customer: props.detail_customer, time_night: location.state.time_night, id_hotel: props.id_hotel, }}
                                                        onClick={() => scroll.scrollToTop()}>
                                                        <div style={{ padding: "8px 16px", color: "#fff", background: "#2e89ff", fontWeight: 600, width: "max-content", boxSizing: "border-box", borderRadius: 8, float: "right", cursor: "pointer" }} className="dsowe_2">
                                                            {t("Chọn")}
                                                        </div>
                                                    </Link>
                                                    :
                                                    <Link to={"/booking/v2/" + props.id_hotel} style={{ textDecoration: "none", userSelect: "none" }} state={{ time: query.get("spec"), count_customer: query.get("c"), room: query.get("r"), detail_customer: query.get("g"), time_night: query.get("tn"), id_hotel: props.id_hotel }}>
                                                        <div style={{ padding: "8px 16px", color: "#fff", background: "#2e89ff", fontWeight: 600, width: "max-content", boxSizing: "border-box", borderRadius: 8, float: "right", cursor: "pointer" }} className="dsowe_2">
                                                            {t("Chọn")}
                                                        </div>
                                                    </Link>
                                            }
                                        </>
                                    }
                                </>
                                :
                                <>
                                    <CostHotel cost_adult={props.cost_adult} />
                                    {
                                        props.xxxx !== true &&
                                        <Link to={"/pre-booking/hotel?id=" + props.id_hotel} style={{ textDecoration: "none", userSelect: "none" }} state={{ time: query.get("spec"), count_customer: query.get("c"), room: query.get("r"), detail_customer: query.get("g"), time_night: query.get("tn") }}>
                                            <div style={{ padding: "8px 16px", color: "#fff", background: "#2e89ff", fontWeight: 600, width: "max-content", boxSizing: "border-box", borderRadius: 8, float: "right", cursor: "pointer" }} className="dsowe_2">
                                                {t("Chọn")}
                                            </div>
                                        </Link>
                                    }
                                </>
                        }
                    </>
                </div>
            </div>

        </div>
    )
}

export default ResultSearchHotel