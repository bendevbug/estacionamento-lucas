import { styled } from "@stitches/react";


export const EstoqueFood = styled('section', {
    display: 'flex',
    justifyContent: 'space-around',

    div: {
        p: {
            padding: '1rem'
        }
    },


    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',

        div: {
            display: 'flex',
            flexDirection: 'row',
            padding: '1rem',
            gap: '1rem',
        },

        button: {
            width: '4vw',
            height: '2vh'
        }
    }
})