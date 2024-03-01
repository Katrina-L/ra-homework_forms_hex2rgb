import { ChangeEventHandler, FC, useState } from "react";

export const GetHexForm: FC = () => {
    const [hex, setHex] = useState('#222329');

    const handleChange: ChangeEventHandler<HTMLInputElement> = text => {
        text.preventDefault();
        setHex(text.target.value);
    }

    const hexToRGB = (hex: string) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
    
        return `rgb(${r}, ${g}, ${b})`;
    }

    const validateHex = (hex: string) => {
        if ( hex.length < 7 ) {
            return "";
        }
        if ( /#[a-f\d]{6}\b/gi.test(hex) ) {
            return hexToRGB(hex);
        } else {
            return 'ОШИБКА';
        }
    }

    return (
        <div className="converter-color" 
                style={{padding: '200px',
                       background: validateHex(hex)}}>
            <form className="input-hex-color"
                    style={{border: '1px solid lightgrey',
                            background: '#222329'}}>
                <input className="hex-color"
                        name="hex" 
                        type="text" 
                        value={hex} 
                        onChange={handleChange}
                        maxLength={7}
                        style={{textAlign: 'center',
                        fontSize: '20px'}}
                />
            </form>
            <p className="rgb-color"
                    style={{
                        width: '260px',
                        height: '29px',
                        border: '1px solid lightgrey',
                        fontSize: "20px",
                        background: '#222329'
                    }}>{validateHex(hex)}
            </p>
        </div>
    )
}
