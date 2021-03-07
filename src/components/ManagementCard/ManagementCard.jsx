import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import './ManagementCard.css'

export default function ManagementCard(props) {
    
    return (
        <>

            <Card style={{ background: '#ffffff' }}>

                <div className="card-content" >
                    <p>กำหนดปีจัดการข้อมูล : &nbsp;</p>
                    
                        <select >
                            {props.about10years.map((year) => {
                                return (
                                    
                                        <option value={year}>{year}</option>
                                    
                                )
                            })}

                        </select>
                    
                </div>
            </Card>

        </>
    )
}
