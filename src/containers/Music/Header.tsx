import React, {useState, useEffect} from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { musicSearch } from 'api/music'

const primary = '#bf406e';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      background: 'linear-gradient(45deg, #642b73, #bf406e)',
    },
    search: {
      height: '40px',
      width: '300px',
      background: 'white',
      margin: ' 10px auto',
      position: 'relative',
      borderRadius: '5px'
    },
    searchIcon: {
      color: primary,
      position: 'absolute',
      left: '10px',
      top: '8px',
      '&:hover': {
        cursor: 'pointer'
      }
    },
    inputRoot: {
      width: '80%',
      height: '100%',
      position: 'absolute',
      left: '36px',
      color: 'inherit',
    },
    inputInput: {
      width: '100%',
      color: 'black'
    },
  }),
);

interface SearchProps extends HeaderProps {}
function Search(props: SearchProps) {
  const classes = useStyles();
  let [text, setText] = useState<string>('')
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.keyCode === 13) {
      props.handleSearch(text)
    }
  }
  const handleChange = (text: string) => {
    setText(text)
  }
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onKeyDown={handleSearch}
        onChange={e => handleChange(String(e.target.value))}
      />
    </div>
  )
}

interface HeaderProps {
  handleSearch(keyWord: string): void
}
export default function Header(props: HeaderProps) {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Search handleSearch={props.handleSearch} />
      </AppBar>
    </div>
  )
}