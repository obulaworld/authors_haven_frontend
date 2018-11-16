import React from 'react'
import Button from '../button/Button'

export default function UserAbout() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="l-ah-user-about d-flex justify-content-center">
              <div className="l-ah-user-thumbnail">
                <div className="thumbnail"></div>
              </div>
              <div className="l-ah-user-info">
                <p className="header-title">AUTHORED BY</p>
                <p className="user-name">Ismail Ibrahim</p>
                <p className="user-bio">
                  I'm an award-winning writer based in Toronto, my work's been featured by Thrive,
                  Thought Catalog, and The Startup, and I'm always working to get better.
                </p>
                <Button type="follow-btn" text="Follow"/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
