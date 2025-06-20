import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io';
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
            <> LinkedIn <FaLinkedin size={30} />
            </>),
            href: 'https://linkedin.com/in/heenafathimah/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
              <> GitHub<FaGithub size={30} />
              </>),
            href: 'https://github.com/heenaf',
            
        },
        {
          id: 3,
          child: (
              <> Mail<IoMdMail size={30} /></>),
          href: 'mailto:heenaofficial@gmail.com',
      },
        {
            id: 4,
            child: (
              <> Resume <BsFillPersonLinesFill size={30} /> </>),
              href:'https://drive.google.com/file/d/1LHBR0BnkgInuv76EzlzCWzkLIh4gKFSO/view?usp=drive_link',
            
      },
    ];
    
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
     
      <ul>
 
                   {links.map (({id,child,href,style}) => (

                   
<li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:ml-[10px] hover:rounded-md duration-300" +  "  "  + style}>
            <a href={href} 
            className="flex justify-between items-center w-full text-white" >
            {child}
        
        </a>
        </li>

                   ))}
        </ul>
      </div>

    
  )
}

 export default SocialLinks

