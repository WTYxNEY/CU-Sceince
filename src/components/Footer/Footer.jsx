import React, { useState, useRef } from 'react'
import { IoMdAddCircle } from 'react-icons/io';
import { Button } from 'react-bootstrap'
import './Footer.css'
import CreatePhakwichaModal from '../Modals/Phakwicha/Create/CreatePhakwichaModal'
import CreateDepartmentModal from '../Modals/Department/Create/CreateDepartmentModal'
import CreateMissionModal from '../Modals/Mission/Create/CreateMissionModal'
import CreateBudgetModal from '../Modals/Budget/Create/CreateBudgetModal'

export default function Footer({ page, currentTab, year }) {

    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef()
    function handleClickAdd() {
        inputRef.current.click()
    }
    const checkPage = () => {
        if (page === '/course') {
            return (
                <>
                    <CreatePhakwichaModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        header="Create"
                        page={page}
                        currentTab={currentTab}
                        year={year}
                    />
                </>
            )
        } else if (page === '/department') {
            return (
                <>
                    <CreateDepartmentModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        header="Create"
                        page={page}
                        currentTab={currentTab}
                        year={year}
                    />
                </>
            )
        } else if (page === '/mission') {
            return (
                <>
                    <CreateMissionModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        header="Create"
                        page={page}
                        currentTab={currentTab}
                        year={year}
                    />
                </>
            )
        }else if (page === '/budget') {
            return (
                <>
                    <CreateBudgetModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        header="Create"
                        page={page}
                        currentTab={currentTab}
                        year={year}
                    />
                </>
            )
        }
    }
    return (
        <>
            <div className="footer-content">

                <div className="add-icon">

                    <button onClick={() => setIsOpen(true)}>
                        <IoMdAddCircle />
                    </button>

                    <div className="create">
                        {checkPage()}
                    </div>

                </div>
                <div className="csv-button">

                    <Button onClick={() => handleClickAdd()} style={{ backgroundColor: '#27C381', borderColor: '#27C381', marginRight: '10px',fontSize: '18px' }}><p>นำเข้า CSV</p></Button>
                    <input type="file" name="file" style={{ display: 'none' }} ref={inputRef} />
                    <Button style={{ backgroundColor: '#27C381', borderColor: '#27C381', marginRight: '44px',fontSize: '18px' }}><p>ส่งออก CSV</p></Button>
                </div>

            </div>
        </>
    )
}
