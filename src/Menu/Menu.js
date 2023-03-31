import React from 'react'
import './Menu.css'
const Menu = () => {
  const [myLeft, setMyLeft] = React.useState(-170)
  const [isMobileView, setIsMobileView] = React.useState(document.body.offsetWidth < 600 ? true : false)
  const [menu, setMenu] = React.useState()
  let flag = true;
  let timeoutId;
  window.addEventListener('resize', (eve) => {
      if (flag) {
          fnHandleResize()
          flag = false
      }
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
          fnHandleResize()
      }, 1000)
  })

  const fnHandleResize = () => {
      const _width = document.body.offsetWidth
      setIsMobileView(_width > 600 ? false : true)

  }

  const fnClick = (eve) => {
      eve.stopPropagation()
      const {nodeName,id}=eve.target
     if( nodeName =='DIV') return
      
      setMenu(id)
      if (isMobileView) {
          setMyLeft(-170)
      }
  }
  const fnMobileMenuBtn = () => {
      setMyLeft(myLeft == 0 ? -170 : 0)
  }

  return <div>
      {isMobileView && <button onClick={fnMobileMenuBtn} className='mobile-menu-btn'>Mobile Menu</button>}
      <div  onClick={fnClick} style={{ left: myLeft }} className={isMobileView ? 'mobile-menu' : 'menu'}>
          <a id='Home' className={menu =='Home' && 'menu-active' } >HOME</a>
          <a id='About' className={menu =='About' && 'menu-active '} >ABOUT</a>
          <a id='Contact' className={menu =='Contact' && 'menu-active '} >CONTACT</a>
      </div>

    
  </div>
  
}
 

export default Menu