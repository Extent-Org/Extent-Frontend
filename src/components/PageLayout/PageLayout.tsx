import React, { useEffect } from 'react'
import LandingNav from '../LandingNav/LandingNav'

type PageLayoutProps = {
  children: React.ReactNode
}

const PageLayout = (props: PageLayoutProps) => {
  const [winWidth, setWinWidth] = React.useState(window.innerWidth)
  useEffect(() => {
    setWinWidth(window.innerWidth)
  }, [winWidth])
  return (
    <div>
      <LandingNav active={0}  winWidth={winWidth} />
      {props.children}
    </div>
  )
}

export default PageLayout