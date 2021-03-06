import React, { useState } from 'react'
import * as ReactBoostStrap from 'react-bootstrap'
import './TableDepartment.css'
import { FcFolder } from 'react-icons/fc'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillCheckCircle } from 'react-icons/ai'
import { AiFillCloseCircle } from 'react-icons/ai'
import EditPhakwichaModal from '../../Modals/Department/Edit/EditDepartmentModal'
import DeleteDepartmentModal from '../../Modals/Department/Delete/DeleteDepartmentModal'

export default function TablePhakwicha({ page, currentTab, year }) {
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

    const renderData = (item, index) => {
        return (
            <tr key={index}>
                <td style={{ padding: '8px 8px 8px 75px' }}>{item.id}</td>
                <td>{item.work}</td>
                <td>{item.status === 'open' ?
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
                            <DeleteDepartmentModal
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

            <ReactBoostStrap.Table >
                <thead >
                    <tr style={{ backgroundColor: '#E83E8C', color: '#fff' }}>
                        <th style={{ width: '15%', padding: '8px 8px 8px 60px' }}>???????????????</th>
                        <th style={{ width: '60%' }}>{currentTab === 1 ? "????????????" :  "?????????"}</th>
                        <th style={{ width: '10%' }}>???????????????</th>
                        <th>??????????????????????????????/??????</th>
                    </tr>
                </thead>
                <tbody style={{ borderColor: '#F5F5F5' }}>
                    {data.map(renderData)}
                </tbody>
            </ReactBoostStrap.Table>
        </>
    )
}
