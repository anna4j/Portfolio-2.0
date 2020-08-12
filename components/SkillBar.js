import React from "react";

const SkillBar = (props) => {
    const { bgcolor, completed, text } = props;

    const containerStyles = {
        height: 30,
        width: '70%',
        backgroundColor: "#e0e0de",
        marginTop: 40,
        marginBottom: 40,

    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',


    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>

            <div style={fillerStyles}>
                <span style={labelStyles}>{`${text}`}</span>
            </div>
        </div>
    );
};


export default SkillBar;