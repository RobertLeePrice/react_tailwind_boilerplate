import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Search from './Search'
import MenuIcon from '../icons/MenuIcon'
import GearIcon from '../icons/GearIcon'


function Navbar() {

    const {config} = useSelector(
        state => ({
            config: state.config
        }),
        shallowEqual
    )
    let {rightSidebar, collapsed} = {...config}
    const dispatch = useDispatch()

    return (
        <div className="navbar border-b">
            <div className="navbar-inner w-full flex items-center justify-start">
                <button
                    className="mx-4"
                    onClick={() =>
                        dispatch({
                        type: 'SET_CONFIG_KEY',
                        key: 'collapsed',
                        value: !collapsed
                    })
                }>    
                    <MenuIcon classes="h-6 w-6 text-black" />
                </button>

                {/* <Search /> */}

                <span className="ml-auto"></span>
                {/* <Dropdown2 />
                <Dropdown1 />
                <Dropdown4 />
                <Dropdown3 />
                <Dropdown5 /> */}
                <button
                    className="btn-transparent flex items-center justify-center h-16 w-8 mx-4"
                    onClick={() =>
                        dispatch({
                        type: 'SET_CONFIG_KEY',
                        key: 'rightSidebar',
                        value: !rightSidebar
                    })
                }>
                    <GearIcon classes="h-6 w-6 text-black" />
                </button>
            </div>
        </div>
    )
}

export default Navbar
