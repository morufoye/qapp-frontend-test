import React, {Fragment, useContext, useEffect, useState} from 'react'
import { CogIcon, AcademicCapIcon, MusicNoteIcon, DotsHorizontalIcon } from '@heroicons/react/solid'

import ChangePassword from "../modals/ChangePassword";
import {useDashboard} from "./dashboard-context";
import AuthContext from "../context/auth-context";

export default function DashboardHome() {
  const [activeClass, setActiveClass]= useState(0);
  const {welcomehome} = useContext(AuthContext);

  const[pwordModal, setPwordModal] = useState(false);



  const links = [{name: "Accounts", icon: AcademicCapIcon},
                 {name: "Edit Profile", icon: MusicNoteIcon},
                 {name: "Change Password", icon: MusicNoteIcon}
    ]


    links.push({name : "Others", icon : AcademicCapIcon});

const buttonClass= `block w-full px-4 py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500`

const getActiveClass =(index)=>{
  return activeClass === index? buttonClass + " bg-gray-600": buttonClass
}






    return (
      <Fragment> {
    <div className="flex md:flex-row-reverse flex-wrap md:h-screen">
        <div
            className="w-full md:w-1/5 bg-gray-900 md:bg-gray-900 px-2 text-center sm:bottom-0 md:pt-8 md:top-20 md:left-0 h-16 md:h-screen sm:fixed md:border-r-4 md:border-gray-600">
            <div className="md:relative mx-auto lg:px-6">
                <ul className="list-reset flex flex-row md:flex-col text-center md:text-left p-1">
                    {links.map((link, index) =>
                        <li className="mr-3 flex-1" key={index}>
                            <button
                                className={getActiveClass(index)}
                                onClick={ () =>  {
                                   alert(' this guy is under development')
                                }}
                            >
                                <link.icon className="h-5 w-5 md:hidden " aria-hidden="true"/>
                                <span
                                    className="hidden md:show pb-1 md:pb-0 text-lg md:text-base text-gray-600 md:text-white block md:inline-block">{link.name}</span>
                            </button>
                        </li>
                    )}

                </ul>
            </div>
        </div>
    </div>
      }
          { pwordModal && <ChangePassword closePwordModal={() => setPwordModal(false)}/>}


       </Fragment>
  )
}