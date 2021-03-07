import React from 'react'
import { Alert } from 'react-bootstrap'
import './Alert.css'

export default function ManagementAlert({ message, status }) {
    return (
        <div className="alet-position">
            <div className="alert-content">
            <Alert variant={status}>
                {message}
            </Alert>
          </div>
        </div>
    )
}
