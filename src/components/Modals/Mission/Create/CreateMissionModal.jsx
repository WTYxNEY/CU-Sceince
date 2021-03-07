import React, { useState } from 'react'
import { Modal, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Switch from '@material-ui/core/Switch';
import './CreateMissionModal.css'
import { GrFormClose } from 'react-icons/gr'


const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 500,
        backgroundColor: 'white',
        border: '2px soild #000',
        borderRadius: '4px',
        // padding: "16px 32px 24px",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textField: {
        width: '100%'
    },
    container: {
        textAlign: 'center'
    }
}))

export default function CreateMissionModal({ isOpen, setIsOpen, page, currentTab, year }) {
    const styles = useStyles();

    const [state, setState] = useState({
        checkedStatus: false,
    });
    const handleChangeStatus = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const renderContent = () => {
            return (
                <div className={styles.modal}>
                    <div className="close-icon">
                        <button onClick={() => {
                            setIsOpen(false)
                        }}><GrFormClose /></button>
                    </div>
                    <div className="modal-create-phak-title">
                        <p style={{ fontWeight: 'bold', fontSize: '24px' }}>เพิ่มพันธกิจ</p>
                    </div>

                    <div className="modal-create-phak-body">
                        <p style={{ fontSize: '18px' }}>ปีงบประมาณ  {year}</p>

                        <div className="detail-no">
                            <p style={{ fontSize: '16px' }}> พันธกิจ *</p>
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

                    </div>
                    <div className="modal-create-phak-footer">
                        <Button style={{ backgroundColor: '#27C381', borderColor: '#27C381' }} >บันทึก</Button>
                    </div>
                </div>
            )
    }

    return (
        <div className="container">
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}

            >
                {renderContent()}
            </Modal>
        </div>
    )
}
