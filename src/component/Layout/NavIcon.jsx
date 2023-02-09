import logo from "../../Images/logo.png";
const NavIcon = () => {
  const icon = {
    height: "40px",
    width: "calc(5%+10%)",
    padding: "13px",
  };
  return <img style={icon} src={logo} alt="logo" />;
};
export default NavIcon;
