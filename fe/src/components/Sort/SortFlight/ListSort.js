import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import _ from "lodash"
import moment from "moment"
import { useTranslation } from "react-i18next"

export default function RadioButtonsGroup(props) {
  const { t } = useTranslation()
  const [value, setvalue] = React.useState(() => t("Giá thấp nhất"))
  const [check, setcheck] = React.useState(() => false)
  const handleChange = (event) => {
    setvalue(event.target.value);
    switch (event.target.value) {
      case t("Giá thấp nhất"):
        setcheck(() => true)
        props.setresultsearch(_.orderBy(props.resultsearch, ['cost_adult'], ['asc']))
        return
      case t("Giá cao nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, ['cost_adult'], ['desc']))
        return
      case t("Cất cánh sớm nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, [`c_timeflight`], ['asc']))
        return
      case t("Cất cánh muộn nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, [`c_timeflight`], ['desc']))
        return
      case t("Hạ cánh sớm nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, [`c_timedestination`], ['asc']))
        return
      case t("Hạ cánh muộn nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, [`c_timedestination`], ['desc']))
        return
      case t("Thời gian bay ngắn nhất"):
        setcheck(() => false)
        props.setresultsearch(_.orderBy(props.resultsearch, a => moment(moment(`${a.timearrive} ${a.daydestination}`, "hh:mm DD-MM-YYYY").diff(moment(`${a.timestart} ${a.dayflight}`, "hh:mm DD-MM-YYYY"), "seconds")), ['asc']))
        return
      default:
        setcheck(() => false)
        return
    }
  };
  return (
    <FormControl className="ddsdkeow-1" style={{ width: "100%" }}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value={t("Giá thấp nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Giá thấp nhất")}</div>} checked={check} />
        <FormControlLabel value={t("Giá cao nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Giá cao nhất")}</div>} />
        <FormControlLabel value={t("Cất cánh sớm nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Cất cánh sớm nhất")}</div>} />
        <FormControlLabel value={t("Cất cánh muộn nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Cất cánh muộn nhất")}</div>} />
        <FormControlLabel value={t("Hạ cánh sớm nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Hạ cánh sớm nhất")}</div>} />
        <FormControlLabel value={t("Hạ cánh muộn nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Hạ cánh muộn nhất")}</div>} />
        <FormControlLabel value={t("Thời gian bay ngắn nhất")} control={<Radio />} label={<div style={{ fontWeight: 600, fontSize: 14 }}>{t("Thời gian bay ngắn nhất")}</div>} />
      </RadioGroup>
    </FormControl>
  )
}