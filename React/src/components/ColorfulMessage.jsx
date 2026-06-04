export const ColorfulMessage = (props) => {
    const { color, children } = props
    const contentStyleA = {
        color, // color: color と同じ意味
        fontSize: '24px',

    }
    return (
        <p style={contentStyleA}>{children}</p>
    )
}