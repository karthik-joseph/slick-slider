import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";

export default function Home() {
    const SliderRef = useRef();
    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        autoplaySpeed:1000,
        draggable:true,
      };

    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios
            .get("https://reqres.in/api/users")
            .then((response)=>{
                setUsers(response.data.data);
            })
            .catch((error)=>{
                console.log(error);
            });
    }, []);

    let renderUsers = ()=>{
        return users.map((user)=>(
            <ListItem>
                <Nav to={`/user/${user.id}`}>
                    <Img src={user.avatar} alt={user.first_name} />
                </Nav>
                <HeadingH6>
                    {user.first_name} {user.last_name}
                </HeadingH6>
                <Para>{user.email}</Para>
            </ListItem>
        ))
    }
  return (
    <>
        <HeeadingH1>Users</HeeadingH1>
        <div className='container'>
            <Slider ref={SliderRef} {...settings} className='List'>
                {renderUsers()}
            </Slider>
            <div style={{textAlign:"center",marginTop:"40px"}}>
                <button className='button' onClick={()=>SliderRef.current.slickPrev()}>previous</button>
                <button className='button' onClick={()=>SliderRef.current.slickNext()}>Next</button>
            </div>
        </div>
    </>
  )
}

const HeeadingH1 = styled.h1`
    text-align:center;
    margin-top:20px;
    margin-bottom:12px;
`;
const ListItem = styled.div`
    width:40%;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    align-content:center;
`;
const Nav = styled(NavLink)`

`;
const Img = styled.img`
    margin-left:20%;
`;
const HeadingH6 = styled.h6`
    font-size:17px;
    margin-bottom:12px;
`;
const Para = styled.p`
    color:red;
`;