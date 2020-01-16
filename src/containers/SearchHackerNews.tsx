/**
 * @file hacker news
 * 
 * logo: https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png
 */

import React from 'react'
import './SearchHankerNews.scss'

function SearchHeader() {
  return (
    <header className="search-header">
      <div className="search-header__logo" >
        <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="hacker logo" />
        <div className="search-header__label">
          Search
          <br/>
          Hacker News
        </div>
      </div>
      <div className="search-header__container">
        <i className="search__icon iconfont icon-search"></i>
        <input 
          type="search"
          placeholder="Search stories by title, url or author"
          className="search__input" />
        <div className="powered-by">
          Search by
          <img src="https://hn.algolia.com/packs/media/images/logo-algolia-blue-35c461b6.svg" alt="algolia" />
        </div>
      </div>
      <div className="search-header__settings">
        <i className="iconfont icon-setting pointer"></i>
      </div>
    </header>
  )
}

function SearchHackerNews() {
  return (
    <div className="search-page">
      <SearchHeader />
    </div>
  )
}

export default SearchHackerNews
