import classes from './Footer.module.css'
const Footer = () =>{
    return (
        <>
        <div className={classes.footerContainer}>
            <div className={classes.footerParentBox}>
                <h1 className={classes.footerText}>The Generics</h1>
                <div className={classes.footerImgBox}>
                    <img style={{width:'5%'}} src='https://prasadyash2411.github.io/ecom-website/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg' />
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Spotify%20Logo.png' />
                    <img src='https://prasadyash2411.github.io/ecom-website/img/Facebook%20Logo.png' />
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;