'use client'
import { RxHamburgerMenu } from "react-icons/rx";
import {
    Avatar,
    Button,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { User } from 'firebase/auth';
import React from 'react';
import styles from "../styles/component.module.css";


import { IoIosNotificationsOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import dynamic from "next/dynamic";

import styled from "@emotion/styled";
import { FaKeyboard, FaSearch, FaMicrophone } from "react-icons/fa";


const drawerWidth = 240;

{/* <SearchBar
value={0}
// onChange={(newValue) => this.setState({ value: newValue })}
// onRequestSearch={() => doSomethingWith(this.state.value)}
/> */}


//adminSettingsPanel: { icon: <MdOutlineAdminPanelSettings />, label: 'Stránka admina' },

const CustomAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'customProp',
})(({ theme }) => ({
    backgroundColor: "white",
    boxShadow: 'none',
}));

const CostumeSection = styled("section", {
    shouldForwardProp: (prop) => prop !== 'customProp',
})(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "15px",
    alignItems: "center",
    width: "100%"
}));

const CostumeCreateButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'customProp',
})(({ theme }) => ({
    color: "black",
    backgroundColor: "rgba(128, 128, 128, 0.3)",
    borderRadius: "20px",
    fontFamily: 'Roboto, sans-serif',
    fontSize: '14px',
    padding: "10px",
    ":hover": {
        backgroundColor: "rgba(128, 128, 128, 0.1)",
    }
}));

const CostumeNotificButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'customProp',
})(({ theme }) => ({
    color: "black",
    borderRadius: "20px",
    ":hover": {
        backgroundColor: "rgba(128, 128, 128, 0.1)",
    }
}));

const SearchBar = () => {
    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Hledat" />
                <FaKeyboard className={styles.icon} size={20} />
                <FaSearch className={styles.icon} size={20} />
            </div>
            <div className={styles.micContainer}>
                <FaMicrophone className={styles.icon} size={20} />
            </div>
        </div>
    )
}

const NavItems = (
    user: User | null | undefined,
    adminEmail: string | undefined,
) => {
    return (
        <CostumeSection>
            <CostumeCreateButton>
                <GoPlus size={25} /> Vytvořit
            </CostumeCreateButton>
            <CostumeNotificButton>
                <IoIosNotificationsOutline size={25} />
            </CostumeNotificButton>
            <Avatar alt={user?.email ? user.email : ""} src="">Dv</Avatar>
        </CostumeSection>
    )
};


const SideBarContent = dynamic(() => import('./sideBar'), { ssr: false });

export default function Navbar(params: { user: User | null | undefined }) {
    const { user } = params
    const adminId = process.env.NEXT_PUBLIC_ADMIN_ID;
    const navItm = NavItems(user, adminId);

    const container =
        window === undefined ? undefined : () => window.document.body;

    const [sideBarOpen, setSideBarOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setSideBarOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} >
            <Typography variant="h6" sx={{
                textAlign: "center", mx: 2, my: 2, color: '#167EF5', fontFamily: 'Segoe UI, sans-serif'
            }}>
                Menu
            </Typography>
            <Divider />
            {<SideBarContent user={user} />}
        </Box>
    );

    return (
        <Box>
            <CssBaseline />
            <CustomAppBar>
                <Toolbar className="nav">
                    <section className={styles.mainSection}>
                        <section className={styles.startSection}>
                            <IconButton
                                color="info"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: 'block' }}
                            >
                                <RxHamburgerMenu />
                            </IconButton>
                            <Typography
                                variant="h6"
                                component="div"
                                color="black"
                                fontFamily='Segoe UI, sans-serif'
                            >
                                socialM
                            </Typography>
                        </section>

                        <section className={styles.middleSection}>
                            {<SearchBar />}
                        </section>

                        <section className={styles.endSection}>
                            <Box className={styles.section}>{navItm}</Box>
                        </section>
                    </section>
                </Toolbar>
            </CustomAppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={sideBarOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: 'block',
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            overflowX: 'hidden',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
};
