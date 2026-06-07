/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Title = css({
    margin: 0,
    color: "#3d84a8"
})

const Button = styled.button`
    background-color: #abedd8;
    border: none;
    padding: 8px;
    border-radius: 20px;
`

export const Emotion = () => {
    return (
        <div css={containerStyle}>
            <p css={Title}>- Emotion -</p>
            <Button>FIGHT</Button>
        </div>
    )
}
