// react libraries
import React from 'react';

/**
 * @desc seach compoment on the header
 * @return Component HeaderSearch
 */
const HeaderSearch = () => (
  <div className="topnav-search">
    <div className="form-group">
      <input type="text" name="" id="" className="form-control" placeholder="Search" aria-describedby="helpId" />
      <span className="search-btn"><i className="fas fa-search"></i></span>
      <small id="helpId" className="text-muted">Help text</small>
    </div>
  </div>
);

export default HeaderSearch;
