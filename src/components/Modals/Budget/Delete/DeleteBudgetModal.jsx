import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './DeleteBudgetModal.css'
import { GrFormClose } from 'react-icons/gr'
import RenderAlert from '../../../Alert/RenderAlert'

export default function DeleteBudgetModal({ isOpen, setIsOpen }) {
    const [alert, setAlert] = useState(false)
    useEffect(() => {
        setAlert(false)
    }, [alert])
    const successAlert = () => {
        
        setAlert(true)
        setIsOpen(false)
        
    }
    return (
        <>
            <Modal
                show={isOpen}
                onHide={() => {
                    setIsOpen(false)
                }}
                centered

            >
                <div className="close-icon">
                    <button onClick={() => {
                        setIsOpen(false)
                    }}><GrFormClose /></button>
                </div>

                <Modal.Header style={{ border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 0  }}>
                </Modal.Header>
                <Modal.Title style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}><h5 style={{ fontWeight: 'bold' }}>ลบข้อมูล</h5></Modal.Title>
                <Modal.Body style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px', paddingBottom: "5px " }}><h6 style={{ fontWeight: 'bold' }}>คุณต้องการลบข้อมูลนี้หรือไม่ ?</h6></Modal.Body>
                <Modal.Footer
                    style={{ border: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 0 }}
                >
                    <Button variant="secondary" style={{ padding: 0, width: '90%', marginBottom: '20px', padding: '4px 0' , marginTop: '10px'}} onClick={() => setIsOpen(false)}>
                        <p style={{ margin: 0 }}>ไม่ต้องการ</p>
                    </Button>
                    <Button style={{ padding: 0, width: '90%', backgroundColor: '#F0462B', borderColor: '#F0462B', marginBottom: '20px' }}   onClick={() => successAlert()}>
                        <p style={{ margin: 0, padding: '4px 0' }}>ต้องการ</p>
                        {alert ? <RenderAlert message={'บันทึกข้อมูลสำเร็จ'} status={'success'} /> : null}
                    </Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}
