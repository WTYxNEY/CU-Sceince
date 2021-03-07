import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Switch from '@material-ui/core/Switch';
import './EditPhakwichaModal.css'
import { GrFormClose } from 'react-icons/gr'


export default function EditPhakwichaModal({ isOpen, setIsOpen, page, currentTab, year }) {
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

    const checkDisableTab1 = () => {
        if (disableInput) {
            return (
                <>
                    <div className="close-icon">
                        <button onClick={() => {
                            closeModal()
                        }}><GrFormClose /></button>

                    </div>
                    <Modal.Header style={{ border: 'none', paddingTop: 0 }}>
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดภาควิชา</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ {year} </p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}>รหัสวิชา *</p>
                            <input type="text" name="phakwicha" required disabled style={{ backgroundColor: '#F5F5F5' }} />

                        </div>
                        <div className="detail-name">
                            <p style={{ fontSize: '16px' }}>ชื่อภาควิชา *</p>

                            <input type="text" name="phakwicha" required disabled style={{ backgroundColor: '#F5F5F5' }} />

                        </div>
                        <div className="detail-sub-name">
                            <p style={{ fontSize: '16px' }}>ชื่อย่อภาควิชา</p>
                            <input type="text" name="phakwicha" required disabled style={{ backgroundColor: '#F5F5F5' }} />

                        </div>
                        <div className="detail-budget">
                            <p style={{ fontSize: '16px' }}>ต้นทุนภาควิชา</p>
                            <input type="text" name="phakwicha" required disabled style={{ backgroundColor: '#F5F5F5' }} />

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
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดภาควิชา</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ  {year}</p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}>รหัสวิชา *</p>

                            <input type="text" name="phakwicha" required />

                        </div>
                        <div className="detail-name">
                            <p style={{ fontSize: '16px' }}>ชื่อภาควิชา *</p>


                            <input type="text" name="phakwicha" required />

                        </div>
                        <div className="detail-sub-name">
                            <p style={{ fontSize: '16px' }}>ชื่อย่อภาควิชา</p>

                            <input type="text" name="phakwicha" required />


                        </div>
                        <div className="detail-budget">
                            <p style={{ fontSize: '16px' }}>ต้นทุนภาควิชา</p>

                            <input type="text" name="phakwicha" required />


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
                        <Button style={{ backgroundColor: '#27C381', borderColor: '#27C381' }}>บันทึก</Button>

                    </Modal.Footer>
                </>
            )
        }
    }


    const checkDisableTab2 = () => {
        if (disableInput) {
            return (
                <>
                    <div className="close-icon">
                        <button onClick={() => {
                            closeModal()
                        }}><GrFormClose /></button>
                    </div>
                    <Modal.Header style={{ border: 'none', paddingTop: 0 }}>
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดหลักสูตร</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ  {year}</p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}>ชื่อภาควิชา *</p>
                            <div className="detail-dropdown">
                                <select disabled style={{ backgroundColor: '#F5F5F5' }}>
                                    {tempDepart.map((dept) => {
                                        return (
                                            <option value={dept} disabled>{dept}</option>
                                        )
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="detail-name">
                            <p style={{ fontSize: '16px' }}>รหัสหลักสูตร *</p>
                            <input type="text" name="phakwicha" required disabled />
                        </div>
                        <div className="detail-sub-name">
                            <p style={{ fontSize: '16px' }}>ชื่อหลักสูตร *</p>
                            <input type="text" name="phakwicha" required disabled />
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
                        <Modal.Title style={{ fontWeight: 'bold' }}><p>รายละเอียดหลักสูตร</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body
                        style={{ padding: '0', margin: '0 10%' }}
                    >
                        <p>ปีงบประมาณ  {year}</p>

                        <div className="detail-no">
                            <p>ชื่อภาควิชา *</p>
                            <div className="detail-dropdown">
                                <select >
                                    {tempDepart.map((dept) => {
                                        return (
                                            <option value={dept} >{dept}</option>
                                        )
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="detail-name">
                            <p>รหัสหลักสูตร *</p>
                            <input type="text" name="phakwicha" required />
                        </div>
                        <div className="detail-sub-name">
                            <p>ชื่อหลักสูตร *</p>
                            <input type="text" name="phakwicha" required />
                        </div>

                        <div className="detail-status">
                            สถานะ
                            ปิด
                            <Switch
                                checked={state.checkedStatus}
                                onChange={handleChangeStatus}
                                name="checkedStatus"
                                style={{ color: '#E83E8C' }}

                            />
                            เปิด
                        </div>
                    </Modal.Body>

                    <Modal.Footer
                        style={{ border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                    >
                        <Button style={{ backgroundColor: '#27C381', borderColor: '#27C381' }}>บันทึก</Button>
                    </Modal.Footer>
                </>
            )
        }

    }

    const renderContent = () => {
        if (page === '/course' && currentTab === 1) {
            return (
                <>
                    {checkDisableTab1()}
                </>

            )
        } else if (page === '/course' && currentTab === 2) {
            return (
                <>
                    { checkDisableTab2()}
                </>
            )

        }
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
