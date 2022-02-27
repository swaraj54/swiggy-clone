import React from 'react';
import { CommonOrangeButton } from '../cart/greenButton/Button';


const OrderSuccessful = () => {
    return (<div style={{overflow:"hidden"}}>
 <div className="ImageElement-root-kir ImageElement-loaded-icR">
 <div id="messageDiv" style={{
     position: "absolute",
     height:"10vw",
     width:"35vw",
     backgroundColor:"white",
     margin: "12vw 0 0 50vw",
     fontSize:"2vw"
 }}>
  Your order is successfully placed. <br /> It will be delivered in 30 min
<CommonOrangeButton onClick={()=>{
    window.location.href="/menu";
}}>Buy More</CommonOrangeButton>
 </div>
  <img
    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/60c8e1117480989.6076bf391e683.gif"
    srcSet="https://mir-s3-cdn-cf.behance.net/project_modules/disp/60c8e1117480989.6076bf391e683.gif 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/60c8e1117480989.6076bf391e683.gif 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/60c8e1117480989.6076bf391e683.gif 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/60c8e1117480989.6076bf391e683.gif 1440w"
    sizes="(max-width: 1400px) 100vw, 1400px"
    alt="app redesign online food app swiggy Case Study experience design food delivery Interaction design  Swiggy Redesign UX UI UX/UI case study"
    loading="lazy"
    className="ImageElement-image-SRv ImageElement-blockPointerEvents-Rkg"
  />
  {/**/}
</div>

</div>
    );
};


export default OrderSuccessful;