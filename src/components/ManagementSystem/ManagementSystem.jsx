import React, { useState } from 'react'
import './ManagementSystem.css'
import { Button } from 'react-bootstrap'
import ManagementCard from '../ManagementCard/ManagementCard'
import RenderAlert from '../Alert/RenderAlert'

export default function ManagementSystem() {
    const [alert, setAlert] = useState(false)
    let newDate = new Date();
    let year = newDate.getFullYear();
    let BEyear = (year + 543) - 4;

    let about10years = [];
    let num = 10;
    for (let index = 0; index <= num; index++) {
        if (index !== 0) {
            BEyear += 1
        }

        about10years.push(BEyear)
    }

    const successAlert = () => {
        setAlert(true)
    }


    return (
        <div className="card-container">
            <div className="card-container-card">
                <ManagementCard about10years={about10years} />
            </div>

            <div className="card-btn">
                <Button
                    style={{ backgroundColor: '#27C381', borderColor: '#27C381' }}
                    onClick={() => successAlert()}
                >
                    บันทึก
                    </Button>
                {alert ? <RenderAlert message={'บันทึกข้อมูลสำเร็จ'} status={'success'} /> : null}
            </div>
        </div>
    )
}
