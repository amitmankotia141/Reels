import React from "react";
import Image from "next/image";
import logo from "../../Assets/Instagram.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Carousel } from "react-responsive-carousel";
import bg1 from "../../Assets/bg1.jpeg";
import bg2 from "../../Assets/bg2.jpeg";
import bg3 from "../../Assets/bg3.jpeg";
import bg4 from "../../Assets/bg4.jpeg";
import bg5 from "../../Assets/bg5.jpeg";
export default function index() {
return (
<div className="login-container">
<div className="insta-mob-bg">
<div className="carousel">
<Carousel autoPlay={true} interval={2000} infiniteLoop showArrows={false} showThumbs={false} showIndicators={false} stopOnHover showStatus={false}>
<Image src={bg1} /> <Image src={bg2} /> <Image src={bg3} /> <Image src={bg4} /> <Image src={bg5} />
</Carousel>
</div>
</div>
<div>
  <div className="login-card">
  <Image src={logo} />
  <TextField id="outlined-basic" fullWidth label="Email" variant="outlined" margin="dense"/>
  <TextField id="outlined-basic" label="Password" fullWidth variant="outlined" margin="dense"/>
  <div style={{ color: "blue", marginTop: "1rem" }}>Forget Password</div>
<Button style={{ marginTop: "1rem" }} variant="contained" fullWidth>Login</Button>
</div>
<div className="bottom-card">
Don't Have an account ?{" "}
<span style={{ color: "blueviolet" }}>Signup</span>
</div>
</div>
</div>
);
}
