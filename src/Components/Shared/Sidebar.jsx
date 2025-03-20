import React from 'react'
import classNames from 'classnames';
import { Link,useLocation } from 'react-router-dom';
import { FcCandleSticks } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/constants/Navigation';
import { HiOutlineAdjustments, HiOutlineLogout } from 'react-icons/hi';
function Sidebar() {
 const linkClasses="flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700  hover:no-underline   rounded-sm text-base active:bg-neutral-200"

    function SideBarLink({item}){
        const {pathname}= useLocation()
        return(

            <Link to={item.path}>

                <span className={ classNames(pathname === item.path ?"bg-neutral-700  text-white ": " text-neutral-500",linkClasses)}>
             {item.icon}       {item.label}
                </span>
            </Link>
        )
    }
   
  return (
    <div className=' flex flex-col w-60 p-3 bg-neutral-950 text-white'>
       <div className='flex items-center gap-2 px-1 py-3'>
       <FcCandleSticks  fontSize={36}/>
       <span className='text-neutral-200 text-lg'> Scavo Shop </span>
       </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5 '>
            {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
                <SideBarLink key={item.key} item={item}/>
               
            
            ))}
        </div>
        <div className='flex flex-col gap-0.5  pt-2  border-t border-neutral-700 '>
            {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item)=>
               
               <SideBarLink key={item.key} item={item}/>
              
            )

            }
             < div className={ classNames("text-red-500 cursor-pointer",linkClasses)}>

<span>
    <HiOutlineLogout/>

</span>
LogOut
</div>
        </div>
      
    </div>
  )
}

export default Sidebar