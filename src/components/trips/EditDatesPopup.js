import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import "./DatePopup.css"
import { editTripBaseCamp } from "../../services/baseCampService";
import { Button, IconButton, Modal } from "@mui/material";

export default function EditDatesPopup({ trigger, setTrigger, trip, camp, popupBtn, getSetTripBaseCamps }) {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [startDateMax, setStartDateMax] = useState("")
    const [endDateMin, setEndDateMin] = useState("")



    const postNewDates = () => {
        const newTripBaseObj = {
            id: camp.id,
            tripId: camp.tripId,
            baseCampId: camp.baseCampId,
            startDate: startDate,
            endDate: endDate
        }
        if (startDate === null || endDate === null) {
            window.alert("Please select both Start and End dates!")
        } else {
            editTripBaseCamp(newTripBaseObj).then(()=>{
                getSetTripBaseCamps()
                setTrigger(false)
            })
        }
    }

    const setDateParameters = () => {
        startDate === null ? setEndDateMin(trip.startDate) : setEndDateMin(startDate)
        endDate === null ? setStartDateMax(trip.endDate) : setStartDateMax(endDate)
    }

    const handleStart = (date) => {
        setStartDate(date)
    }

    const handleEnd = (date) => {
        setEndDate(date)
    }

    const handleClose = () => {
        setTrigger(false)
    }


    useEffect(()=>{
        setDateParameters()
    }, [trip, startDate, endDate])

    useEffect(()=>{
        setStartDate(null)
        setEndDate(null)
    }, [popupBtn])


    return (
        <>
            <Modal
                open={trigger}
            >
                <div className="popup">
                    <div className="editBaseDates-card">
                        <IconButton
                            className="editBaseDates-close-btn" 
                            onClick={handleClose}
                        >
                            <CloseSharpIcon />
                        </IconButton>
                        <h3 className="editBaseDates-header">Edit BaseCamp Dates</h3>
                        <div className="editBaseDates-dates">
                            <DatePicker 
                                id="start"
                                label="Start Date"
                                inputFormat="MM/DD/YYYY"
                                value={startDate}
                                minDate={dayjs(endDateMin)}
                                maxDate={dayjs(startDateMax)}
                                onChange={handleStart}
                                slotProps={{
                                    actionBar: {
                                        actions: ['clear']
                                    },
                                    textField: {
                                        error: false,
                                        color: "warning",
                                        focused: true
                                    }
                                }}
                            />
                            <DatePicker
                            id="end"
                            label="End Date"
                            inputFormat="MM/DD/YYYY"
                            value={endDate}
                            minDate={dayjs(endDateMin)}
                            maxDate={dayjs(startDateMax)}
                            onChange={handleEnd}
                            slotProps={{
                                actionBar: {
                                    actions: ['clear']
                                },
                                textField: {
                                    error: false,
                                    color: "warning",
                                    focused: true
                                }
                            }}
                            />
                        </div>
                        <div className="editBaseDates-btn-container">
                            <Button 
                                className="editBaseDates-save-btn"
                                variant="contained"
                                size="small"
                                sx={{
                                    boxShadow: 3,
                                    backgroundColor: '#8A8A8A',
                                    color: 'white',
                                    ":hover": {
                                        backgroundColor: '#A1A1A1',
                                        color: 'white'
                                    }
                                }}
                                onClick={postNewDates}
                            >Save
                            </Button>
                        </div>
                    </div>
                </div> 
            </Modal>
        </>
    )
}