import React, { useState } from 'react'
import * as ReactBoostStrap from 'react-bootstrap'
import './TableBudget.css'
import { FcFolder } from 'react-icons/fc'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import EditBudgetModal from '../../Modals/Budget/Edit/EditBudgetModal'
import DeleteBudgetModal from '../../Modals/Budget/Delete/DeleteBudgetModal'

export default function TableBudget({ page, currentTab, year }) {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const data = [
        {
            id: 1,
            work: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            work: "Com",
            status: "close",
        },



    ];
    const data2 = [
        {
            id: 1,
            nobud: 123456798,
            material: "ทดสอบการแสดงข้อมูล",
            status: 'open'
        },
        {
            id: 2,
            nobud: 461315165,
            material: "ทดสอบการแสดงข้อมูล",
            status: 'close'
        },



    ];

    const renderData = (item, index) => {
        return (
            <tr key={index}>
                <td style={{ padding: '8px 8px 8px 75px' }}>{item.id}</td>
                <td>{item.work}</td>
                <td style={{ marginLeft: '5px', paddingLeft: '15px' }}>{item.status === 'open' ?
                    <div className="status-check"><AiFillCheckCircle /></div>
                    :
                    <div className="status-close"><AiFillCloseCircle /></div>
                }</td>
                <td style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div className="detail-and-delete">

                        <div className="folder-icon">

                            <button onClick={() => setIsOpen(true)}>
                                <FcFolder />
                            </button>
                            <EditBudgetModal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                header="Edit"
                                page={page}
                                currentTab={currentTab}
                                year={year}
                            />

                        </div>

                        <p> &nbsp;/&nbsp;</p>

                        <div className="trash-icon">
                            <button onClick={() => setIsOpenDelete(true)}>
                                <BsFillTrashFill />
                            </button >
                            <DeleteBudgetModal
                                isOpen={isOpenDelete}
                                setIsOpen={setIsOpenDelete}
                                header="Delete"
                            />
                        </div>

                    </div>

                </td>
            </tr>
        )
    }
    const renderData2 = (item, index) => {
        return (
            <tr key={index}>
                <td style={{ padding: '8px 8px 8px 75px' }}>{item.id}</td>
                <td style={{padding: '8px 8px 8px 45px',}}>{item.nobud}</td>
                <td>{item.material}</td>
                <td style={{ marginLeft: '5px', paddingLeft: '15px' }}>{item.status === 'open' ?
                    <div className="status-check"><AiFillCheckCircle /></div>
                    :
                    <div className="status-close"><AiFillCloseCircle /></div>
                }</td>
                <td style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <div className="detail-and-delete">

                        <div className="folder-icon">

                            <button onClick={() => setIsOpen(true)}>
                                <FcFolder />
                            </button>
                            <EditBudgetModal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                header="Edit"
                                page={page}
                                currentTab={currentTab}
                                year={year}
                            />

                        </div>

                        <p> &nbsp;/&nbsp;</p>

                        <div className="trash-icon">
                            <button onClick={() => setIsOpenDelete(true)}>
                                <BsFillTrashFill />
                            </button >
                            <DeleteBudgetModal
                                isOpen={isOpenDelete}
                                setIsOpen={setIsOpenDelete}
                                header="Delete"
                            />
                        </div>

                    </div>

                </td>
            </tr>
        )
    }

    const checkTab = () => {
        if (currentTab === 1) {
            return (
                <>
                    <thead >
                        <tr style={{ backgroundColor: '#E83E8C', color: '#fff' }}>
                            <th style={{ width: '15%', padding: '8px 8px 8px 60px' }}>ลำดับ</th>
                            <th style={{ width: '60%' }}>หมวด</th>
                            <th style={{ width: '10%' }}>สถานะ</th>
                            <th>รายละเอียด/ลบ</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderColor: '#F5F5F5' }}>
                        {data.map(renderData)}

                    </tbody>
                </>
            )
        } else {
            return (
                <>
                <thead >
                        <tr style={{ backgroundColor: '#E83E8C', color: '#fff' }}>
                            <th style={{ width: '12%', padding: '8px 8px 8px 60px' }}>ลำดับ</th>
                            <th style={{paddingLeft: '8px' }}>รหัสส่วนประกอบต้นทุน</th>
                            <th style={{ width: '45%' }}>ส่วนประกอบต้นทุน</th>
                            <th style={{ width: '10%' }}>สถานะ</th>
                            <th>รายละเอียด/ลบ</th>
                        </tr>
                    </thead>
                    <tbody style={{ borderColor: '#F5F5F5' }}>
                        {data2.map(renderData2)}

                    </tbody>
                    
                </>
            )

        }
    }

    return (
        <>

            <ReactBoostStrap.Table >
                {checkTab()}
            </ReactBoostStrap.Table>
        </>
    )
}
