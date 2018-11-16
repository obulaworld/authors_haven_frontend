// react libraries
import React from 'react'

// modules
import Button from '../button/Button'

/**
 * @export UserDeatails
 */
export default function UserDeatails() {
  return (
    <div className="userDetail">
      <div className="container">
        <div className="row">
          <div className="col-md-12 d-flex justify-content-flex-start align-items-center">
            <div>
              <div className="thumbnail"></div>
            </div>
            <div className="username-wrap">
              <div className="username">Mindsworth</div>
              <div className="notice d-flex justify-content-flex-start align-items-center">
                <div className="date">Nov 5</div>
                <div className="read-time">5min read</div>
              </div>
            </div>
            <div>
              <Button type="follow-btn" text="Follow"/>
            </div>
            <div className="l-ah-report">
              <Button type="report-btn" text="Report"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
