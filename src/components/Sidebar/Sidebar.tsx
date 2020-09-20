import React from 'react'
import { Link } from 'react-router-dom'
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import { MdHome, MdChat, MdForum, MdContactPhone, MdExitToApp } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

import './custom.scss'

export default function Sidebar() {
    return (
        <ProSidebar>
            <SidebarContent>
                <Menu>
                    <MenuItem icon={<MdHome />}><Link to="/"> Dashboard </Link>  </MenuItem>
                    <MenuItem icon={<MdChat />}> <Link to="/sent"> Conversas</Link></MenuItem>
                    <MenuItem icon={<MdForum />}> <Link to="/message"> Mensagens</Link></MenuItem>
                    <MenuItem icon={<MdContactPhone />}> <Link to="/contacts"> Contatos Pacientes</Link></MenuItem>
                    <MenuItem icon={<FaHandsHelping />}> <Link to="/partners"> Meus Parceiros</Link></MenuItem>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Menu>
                    <MenuItem icon={<MdExitToApp/>}> Sair</MenuItem>
                </Menu>
            </SidebarFooter>
        </ProSidebar>
    )
}
