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
  avator?: string
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

interface bodyProps extends headerProps {

}
function CardBody(props: bodyProps) {
  const { avator, title, author, subTitle} = props.info;
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

function CardFooter() {
  return (
    <div className="social-card-footer">
      footer
    </div>
  )
}

interface cardProps extends headerProps {

}
function SocialCard(props: cardProps) {
  return (
    <div className="social-card">
      <CardHeader info={props.info} />
      <CardBody info={props.info} />
      <CardFooter />
    </div>
  )
}

const pageData = [
  {
    logo: 'https://tse4-mm.cn.bing.net/th/id/OIP.IVzb3bA0416WB6Xf4GTgUgAAAA?w=173&h=170&c=7&o=5&pid=1.7',
    title: 'Learning React? Start Small.',
    author: 'Jack',
    date: 'Jan 9',
    subTitle: 'This is my first react project with typescript. I can not wait to explore what typescript can give me.',
    avatar: 'https://yc-cloud-1257265770.cos.ap-guangzhou.myqcloud.com/transfer/headPortrait/20190416183143_301088.jpg'
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