/**
 * @file build a social card
 */
import './SocialCardPage.scss'
import React, { useState, useEffect } from 'react'

interface cardInfo {
  avator: string,
  title: string,
  author: string,
  date: string,
}

interface headerProps {
  info: cardInfo
}

function CardHeader(props: headerProps) {
  const { avator, title, author, date} = props.info;
  return (
    <header className="social-card-header">
      <img className="logo" src={avator} alt="用户头像" />
      <div className="right">
        <div className="title">{ title }</div>
        <div>author: <span className="author">{ author }</span></div>
        <div className="date">{ date }</div>
      </div>
    </header>
  )
}

interface cardProps extends headerProps {
  // info: cardInfo
}
function SocialCard(props: cardProps) {
  return (
    <div className="social-card">
      <CardHeader info={props.info} />
    </div>
  )
}

const pageData = [
  {
    avator: 'https://tse4-mm.cn.bing.net/th/id/OIP.IVzb3bA0416WB6Xf4GTgUgAAAA?w=173&h=170&c=7&o=5&pid=1.7',
    title: 'Learning React? Start Small.',
    author: 'Jack',
    date: 'Jan 9'
  }
]

function SocialPage() {
  let [data, setData] = useState<cardInfo[] | null>(null);

  useEffect(() => {
    setData([...pageData])
  }, []);

  return (
    <>
      {data && data.map((v, index) => {
        return (
          <SocialCard key={index} info={v} />
        )
      })}
    </>
  )
}

export default SocialPage;