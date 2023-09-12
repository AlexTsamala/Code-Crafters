import "./button.css"

const button = ({
    description,
    buttonWidth,
    buttonHeight,
    backgroundColor
}) => {
    return (
    <button 
        type="button"
        style={{
            width: { buttonWidth },
            height: { buttonHeight },
            backgroundColor: {  backgroundColor },
        }}
        >
            {description}
    </button>
 ); 
};
export default button;