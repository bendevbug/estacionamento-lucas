import { styled } from '@stitches/react'

export const Container = styled('main', {

})


export const Header = styled('nav', {
    height: '5vh',
    background: '#154c79',
    button: {
        margin: '0 1.5rem',
        background: 'none',
        border: 'none',
        outline: '0',

        '&:hover': {
            cursor: 'pointer',
            border: '1px solid white',
            borderRadius: '0.2rem 0.2rem 0 0',
            padding: '0.5rem 0.5rem 0 0.5rem',
            background: '#1e81b0',
            transition: 'all 0.2s'
        }
    },

    width: '100vw',

    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',

    div: {
        span: {
            margin: '1.5rem'
        }
    }
})