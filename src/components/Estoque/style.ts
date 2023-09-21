import { styled } from "@stitches/react";


export const EstoqueFood = styled('section', {
    display: 'flex',
    justifyContent: 'space-around',

    'div:first-child': {
        'h3 + h3': {
            margin: '1.5rem 0'
        }
    },

    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',

        div: {
            display: 'flex',
            flexDirection: 'row',
            padding: '1.5rem',
            gap: '1.5rem',
        },

        input: {
            width: '20vw',
            height: '4vh'
        }
    }
})

export const ButtonArea = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
})