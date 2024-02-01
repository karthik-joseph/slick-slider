import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
  return (
    <SectionConatainer>
        <SectionLeft>
            <Logo src={require("../assets/images/logo.jpg")} alt='Logo'/>
        </SectionLeft>
        <SectionRight>
            <List>
                <ListItem>
                    <Nav to='/'>Home</Nav >
                </ListItem>
                <ListItem>
                    <Nav to='about'>About</Nav >
                </ListItem> <ListItem>
                    <Nav to='contact'>Contact</Nav >
                </ListItem> <ListItem>
                    <Nav to='gallary'>Gallery</Nav >
                </ListItem>
            </List>
        </SectionRight>
    </SectionConatainer>
  )
}

const SectionConatainer = styled.div`
    display:flex;
    justify-content:space-between;
    background:#21fc9f;
    height:110px;
    align-items:center;
    margin:0 auto;
    padding:0 50px;
    scroll:sticky;
`;
const SectionLeft = styled.div``;
const Logo = styled.img`
    height:90px;
    border-radius: 40px 90px;
`;
const SectionRight = styled.div``;
const List = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const ListItem = styled.li`
    margin-right:16px;
    &:last-child {
        margin-right:0;
    }
    &:hover {
        border-bottom:1px solid #fff;
    }
`;
const Nav = styled(NavLink)`
    color:white;
    font-size:20px;
    font-weight:bold;
`;


export default  NavBar;