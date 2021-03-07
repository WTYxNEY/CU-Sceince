import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Switch from '@material-ui/core/Switch';
import './EditMissionModal.css'
import { GrFormClose } from 'react-icons/gr'


export default function EditMissionModal({ isOpen, setIsOpen, page, currentTab, year }) {
    let timerID = useRef(null);
    const tempDepart = ["คณิตศาสตร์", "วิทยาศาสตร์คอมพิวเตอร์", "วิทยาการคอมพิวเตอร์และเทคโนโลยีสารสนเทศ"]
    const [state, setState] = useState({
        checkedStatus: false,
    });
    const [disableInput, setDisableInput] = useState(true)

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const changeDisableHandle = () => {
        setDisableInput(false)
    }

    const handleChangeStatus = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    const closeModal = () => {
        setDisableInput(true)
        timerID = setTimeout(() => {
            setIsOpen(false)
        }, 200)
    }

    const checkDisableTab = () => {
        if (disableInput) {
            return (
                <>
                    <div className="close-icon">
                        <button onClick={() => {
                            closeModal()
                        }}><GrFormClose /></button>

                    </div>
                    <Modal.Header style={{ border: 'none', paddingTop: 0 }}>
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดพันธกิจ</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ {year} </p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}>พันธกิจ*</p>
                            <input type="text" name="department" required disabled style={{ backgroundColor: '#F5F5F5' }} />

                        </div>

                        <div className="detail-status">
                            <p style={{ fontSize: '18px' }}> สถานะ ปิด</p>

                            <p><Switch
                                checked={state.checkedStatus}
                                onChange={handleChangeStatus}
                                name="checkedStatus"
                                style={{ color: '#E83E8C' }}
                                disabled
                            /></p>
                            <p style={{ fontSize: '18px' }}>เปิด</p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer
                        style={{ border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                    >
                        <Button variant="secondary" onClick={() => changeDisableHandle()}> แก้ไข </Button>

                    </Modal.Footer>

                </>
            )
        } else {
            return (

                <>
                    <div className="close-icon">
                        <button onClick={() => {
                            closeModal()
                        }}><GrFormClose /></button>

                    </div>
                    <Modal.Header style={{ border: 'none', paddingTop: 0 }}>
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดพันธกิจ</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ {year} </p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}>พันธกิจ*</p>
                            <input type="text" name="department" required style={{ backgroundColor: '#F5F5F5' }} />

                        </div>

                        <div className="detail-status">
                            <p style={{ fontSize: '18px' }}> สถานะ ปิด</p>

                            <p><Switch
                                checked={state.checkedStatus}
                                onChange={handleChangeStatus}
                                name="checkedStatus"
                                style={{ color: '#E83E8C' }}

                            /></p>
                            <p style={{ fontSize: '18px' }}>เปิด</p>
                        </div>
                    </Modal.Body>

                    <Modal.Footer
                        style={{ border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                    >
                        <Button style={{ backgroundColor: '#27C381', borderColor: '#27C381' }}> บันทึก </Button>

                    </Modal.Footer>

                </>
            )
        }


    }



    const renderContent = () => {
        return (
            <>
                {checkDisableTab()}
            </>

        )
    }

    return (
        <>
            <Modal
                show={isOpen}
                onHide={() => {
                    closeModal()
                }}
                scrollable="true"
                centered
            >
                {renderContent()}


            </Modal>
        </>
    );
}
