/**
 * @file hacker news
 * 
 * logo: https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png
 */

import React, { useState, useEffect } from 'react'
import './SearchHankerNews.scss'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
interface filterProps {
  conditions: conditionProps,
  handleChange: changeHandler
}
function Filter(props: filterProps) {
  const classes = useStyles();
  const { type, sort, dateRange } = props.conditions;

  return (
    <div>
     <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          onChange={(e) => props.handleChange('type', String(e.target.value))}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="story">Stories</MenuItem>
          <MenuItem value="comment">Comments</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

interface conditionProps {
  type: string,
  sort: string,
  dateRange: string
}
interface changeHandler {
  (item: string, value: string): void
}
function SearchHackerNews() {
  let [conditions, setConditions] = useState<conditionProps>({
    type: 'all',
    sort: '',
    dateRange: '',
  })

  const handleChange: changeHandler = (item, value) => {
    setConditions({...conditions, [item]: value})
  }

  return (
    <div className="search-page">
      <SearchHeader />
      <Filter 
        conditions={conditions}
        handleChange={handleChange} />
    </div>
  )
}

export default SearchHackerNews
