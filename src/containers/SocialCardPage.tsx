/**
 * @file build a social card
 */
import './SocialCardPage.scss'
import React, { useState, useEffect } from 'react'

interface cardInfo {
  logo: string,
  title: string,
  author: string,
  date: string,
  subTitle?: string,
  avator?: string,
  statics: {
    favor: number,
    comments: number
  }
}

interface headerProps {
  info: cardInfo
}

function CardHeader(props: headerProps) {
  const { logo, title, author, date} = props.info;
  return (
    <header className="social-card-header">
      <img className="logo" src={logo} alt="用户头像" />
      <div className="right">
        <div className="title">{ title }</div>
        <div>author: <span className="author">{ author }</span></div>
        <div className="date">{ date }</div>
      </div>
    </header>
  )
}

interface bodyProps extends headerProps {}

function CardBody(props: bodyProps) {
  const { title, subTitle} = props.info;
  return (
    <div className="social-card-body">
      <div className="card-title-box">
        <h2 className="title-text">{ title }</h2>
      </div>
      <div className="card-content">
        <div className="title">{ title}</div>
        <div>{ subTitle}</div>
      </div>
    </div>
  )
}

interface footerProps {
  comments: number,
  favor: number,
  handleFavor: (action: string) => void
}
function CardFooter(props: footerProps) {
  const { comments, favor, handleFavor } = props;
  let [isFavor, setFavor] = useState(false);

  const handleFavorLocal = () => {
    setFavor(!isFavor);
    const action: string = isFavor ? 'unFavor' : 'favor';
    handleFavor(action)
  }

  return (
    <div className="social-card-footer">
      <span className="statics">
        <i className="iconfont icon-message"></i>
        { comments }
      </span>
      <span className="statics">
        <i className="iconfont icon-heart-outline" onClick={ handleFavorLocal }></i>
        { favor }
      </span>
      <span className="statics">
        <i className="iconfont icon-email"></i>
      </span>
    </div>
  )
}

interface cardProps extends headerProps {

}
function SocialCard(props: cardProps) {
  const [item, setItem] = useState<cardInfo | null>(null);

  useEffect(() => {
    const { info } = props;
    setItem({...info});
  }, [props]);

  const handleFavor = (action: string) => {
    if (action === 'favor') {
      
    }
  }

  return (
    <div className="social-card">
      { item &&
        <>
          <CardHeader info={item} />
          <CardBody info={item} />
          <CardFooter {...item.statics} handleFavor={ handleFavor }  />
        </>
      }
    </div>
  )
}

const pageData = [
  {
    logo: 'https://tse4-mm.cn.bing.net/th/id/OIP.IVzb3bA0416WB6Xf4GTgUgAAAA?w=173&h=170&c=7&o=5&pid=1.7',
    title: 'Learning React? Start Small.',
    author: 'Jack',
    date: 'Jan 9',
    subTitle: 'This is my first react project with typescript. I can not wait to explore the advantage of typescript.',
    avatar: 'https://yc-cloud-1257265770.cos.ap-guangzhou.myqcloud.com/transfer/headPortrait/20190416183143_301088.jpg',
    statics: {
      comments: 6,
      favor: 99
    }
  },
  {
    logo: 'https://tse4-mm.cn.bing.net/th/id/OIP.IVzb3bA0416WB6Xf4GTgUgAAAA?w=173&h=170&c=7&o=5&pid=1.7',
    title: 'Build an infinite scroll component.',
    author: 'Jack',
    date: 'Jan 5',
    subTitle: "With IntersectionObserver API, we can easily build an infinite scroll component.",
    avatar: 'https://yc-cloud-1257265770.cos.ap-guangzhou.myqcloud.com/transfer/headPortrait/20190416183143_301088.jpg',
    statics: {
      comments: 23,
      favor: 89
    }
  }
]

function SocialPage() {
  let [data, setData] = useState<cardInfo[] | null>(null);

  useEffect(() => {
    setData([...pageData])
  }, []);

  return (
    <div style={{'minWidth': '800px'}}>
      {data && data.map((v, index) => {
        return (
          <SocialCard key={index} info={v} />
        )
      })}
    </div>
  )
}

export default SocialPage;