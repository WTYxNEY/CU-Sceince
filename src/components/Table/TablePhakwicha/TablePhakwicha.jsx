import React, { useState } from 'react'
import * as ReactBoostStrap from 'react-bootstrap'
import './TablePhakwicha.css'
import { FcFolder } from 'react-icons/fc'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import EditPhakwichaModal from '../../Modals/Phakwicha/Edit/EditPhakwichaModal'
import DeletePhakwicha from '../../Modals/Phakwicha/Delete/DeletePhakwicha'

export default function TablePhakwicha({ page, currentTab, year }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDelete, setIsOpenDelete] = useState(false)
    const data = [
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",
        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",

        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",
        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",

        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",

        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",

        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",

        },
        {
            id: 1,
            coureNo: 2301,
            courseName: "MathMathMathMathMathMa",
            status: "open",

        },
        {
            id: 2,
            coureNo: 2302,
            courseName: "Com",
            status: "close",

        },


    ];

    const renderData = (item, index) => {
        return (
            <tr key={index}>
                <td style={{paddingLeft: '65px'}}>{item.id}</td>
                <td style={{paddingLeft: '70px'}}>{item.coureNo}</td>
                <td  style={{paddingLeft: '52px'}}>{item.courseName}</td>
                <td>{item.status === 'open' ?
                    <div className="status-check"><AiFillCheckCircle /></div>
                    :
                    <div className="status-close"><AiFillCloseCircle /></div>
                }</td>
                <td style={{display: 'flex', flexDirection:'row', justifyContent: 'flex-start'}}>
                    <div className="detail-and-delete">

                        <div className="folder-icon">

                            <button onClick={() => setIsOpen(true)}>
                                <FcFolder />
                            </button>
                            <EditPhakwichaModal
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
                            <DeletePhakwicha
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

    return (
        <>
     
            <ReactBoostStrap.Table>
                <thead>
                    <tr style={{ backgroundColor: '#E83E8C', color: '#fff' }}>
                        <th style={{paddingLeft: '50px',fontSize: '18px'}}>ลำดับ</th>
                        <th style={{paddingLeft: '50px',fontSize: '18px'}}>{currentTab === 1 ? "รหัสภาควิชา" :  "รหัสหลักสูตร"}</th>
                        <th style={{width:'40%',paddingLeft: '50px',fontSize: '18px'}}>{currentTab === 1 ? "ชื่อภาควิชา" :  "ชื่อหลักสูตร"}</th>
                        <th style={{paddingRight: '20px',fontSize: '18px'}}>สถานะ</th>
                        <th  style={{paddingRight: '20px',fontSize: '18px'}}>รายละเอียด/ลบ</th>
                    </tr>
                </thead>
                <tbody style={{ borderColor: '#F5F5F5' }}>
                    {data.map(renderData)}
                </tbody>
            </ReactBoostStrap.Table>
        </>
    )
}
