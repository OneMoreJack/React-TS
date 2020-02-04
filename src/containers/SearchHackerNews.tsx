/**
 * @file hacker news
 * 
 * logo: https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png
 */

import React, { useState, useEffect, ChangeEvent } from 'react'
import './SearchHankerNews.scss'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { debounce } from 'utils'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

interface headerProps {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => any
}
function SearchHeader(props: headerProps) {
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
          className="search__input"
          onChange={ props.handleInput } />
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
interface filterItem {
  label: string,
  key: 'type' | 'sort' | 'dateRange',
  options: { name: string, value: string }[]
}
function Filter(props: filterProps) {
  const classes = useStyles();

  const selectItems: filterItem[] = [
    { 
      label: 'Search', 
      key: 'type', 
      options: [
        {name: 'All', value: 'all'},
        {name: 'Stories', value: 'story'},
        {name: 'Comments', value: 'comment'}
      ]
    },
    { 
      label: 'by', 
      key: 'sort', 
      options: [
        {name: 'Date', value: 'byDate'},
        {name: 'Popularity', value: 'byPopularity'}
      ]
    },
    { 
      label: 'for', 
      key: 'dateRange', 
      options: [
        {name: 'All Time', value: 'all'},
        {name: 'Last 24h', value: 'last24h'},
        {name: 'Past Week', value: 'pastWeek'},
        {name: 'Past Month', value: 'pastMonth'},
        {name: 'Past Year', value: 'pastYear'},
      ]
    }
  ]

  return (
    <div className="filter">
      { selectItems.map(item => (
        <FormControl 
          className={classes.formControl}
          key={item.label} >
          <InputLabel>{item.label}</InputLabel>
          <Select
            value={props.conditions[item.key]}
            onChange={(e) => props.handleChange(item.key, String(e.target.value))} >
            { item.options.map(option => (
              <MenuItem 
                value={option.value}
                key={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
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
    sort: 'byPopularity',
    dateRange: 'all',
  })
  let [text, setText] = useState<string>('')

  useEffect(() => {
    console.log('conditions', conditions, 'text', text)
  }, [conditions, text])

  const handleChange: changeHandler = (item, value) => {
    setConditions({...conditions, [item]: value})
  }


  /**
   * 事件处理函数最好同步执行，此处把防抖函数（异步）提取出来
   * 即同步获得input的值，然后传给异步执行函数
   */
  const showValue = debounce((input) => {
    setText(input)
  })
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    showValue(input)
  }

  return (
    <div className="search-page">
      <SearchHeader
        handleInput={ handleInput } />
      <Filter 
        conditions={conditions}
        handleChange={handleChange} />
    </div>
  )
}

export default SearchHackerNews
