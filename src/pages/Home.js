import React, { useEffect } from 'react';
// Style and Animation
import styled from 'styled-components';
// Redux
import { useDispatch } from 'react-redux';
import { loadGame } from '../actions/gameAction';


const Home = () => {
    // Dispatch
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGame())
    }, [dispatch])
    return (
        <>
            <h1>hello</h1>
        </>
    )
}

export default Home;