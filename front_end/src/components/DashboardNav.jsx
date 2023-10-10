import PropTypes from "prop-types";
import devlogo from "../assets/devchallenges-light.svg";
import Proof from "./Proof";

const DashboardNav = ({ link }) => {
  return (
    <header className="flex items-center justify-between w-full p-4 px-12 bg-zinc-900">
      <img className="h-9" src={devlogo} alt="" />

      <Proof link={link} />
    </header>
  );
};

DashboardNav.propTypes = {
  link: PropTypes.string.isRequired,
};

export default DashboardNav;
