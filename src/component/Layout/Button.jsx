import {Link} from 'react-router-dom'
const Button = (props) =>{
    let button_style;
    
    if(props.className==='login_button'){
        button_style={
            border:'none',
            background:'teal',
            color:'white',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px ',
            padding:'8px 15px 8px 15px',
            borderRadius:'7%',
            cursor:'pointer',
            marginTop:'17px'
            
        };
    }else{
        button_style={
            border:'none',
            background:'tomato',
            color:'white',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '16px ',
            lineHeight: '20px',
            padding:'15px',
            borderRadius:'10%',
            marginTop:'10px',
            cursor:'pointer'
        };
    }
    return (
        <button className={`existing-class ${props.className}`} style={button_style}>
            <Link to="/login">{props.children}</Link></button>
    )
}
export default Button;