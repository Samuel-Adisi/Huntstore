import { AiOutlineMail } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./ContactDetails.module.css";
import { RiArrowDropDownFill } from "react-icons/ri";

const ContactDetails = () => {
  return (
    <div className={classes.contactDetails}>
      <div className={classes.contact}>
        <div className={classes.call}>
          <MdCall />
          <Link to="+233537872807">+233537872807</Link>
        </div>
        <div className={classes.mail}>
          <AiOutlineMail />
          <a href={+2348073946451}>samueladisi555@gmail.com</a>
        </div>
      </div>
      <ul className={classes.details}>
        <li>
          <Link to="#">
            <GrFacebook />
          </Link>
          <Link to="#">
            <BsTwitter />
          </Link>
          <Link to="https://www.linkedin.com/in/Samuel-Adisi">
            <BsLinkedin />
          </Link>

          <div>
            <p>EN</p> <RiArrowDropDownFill />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ContactDetails;
