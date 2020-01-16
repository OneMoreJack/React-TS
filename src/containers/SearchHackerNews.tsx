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
        <div className="search-header__container">
          <span className="search--icon">
            <i className="iconfont icon-search"></i>
          </span>
          <input 
            type="search"
            placeholder="Search stories by title, url or author"
            className="search__input" />
          <div className="powered-by">

          </div>
        </div>
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
