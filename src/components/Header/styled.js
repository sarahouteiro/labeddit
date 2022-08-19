import styled from 'styled-components';
import Toolbar from '@mui/material/Toolbar';

export const HeaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`

export const StyledToolBar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const Img = styled.img`
    height: 40px;
    width: auto;
    margin-right: 10px;
`