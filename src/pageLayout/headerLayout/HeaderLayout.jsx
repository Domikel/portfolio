import Logo from './headercomponents/logoComponent/LogoComponent.jsx';
import NavBar from './headercomponents/navBarComponent/NavBarComponent.jsx';

import SocialMedia from './headercomponents/socialMediaComponent/SocialMediaComponent.jsx';

import './HeaderLayout.css';

function HeaderLayout() {
  return (
    <div className="header-container">
      <Logo />
      <NavBar />
      <SocialMedia />
    </div>
  );
}
export default HeaderLayout;
