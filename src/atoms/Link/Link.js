import styled from 'styled-components'
import css from '@styled-system/css'
import { color } from 'styled-system';


const Link = styled.a(
    css({
        '& , &:link, &:visited':{
            textDecoration:'underline',
        },
        '&:hover, &:active, &:focus':{
            cursor:'pointer',
            color:"accent"
        }
    })
)

export default Link;