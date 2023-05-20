import './MainLayout.css';

function MainLayout(props) {
  return <main className="container-main">{props.children}</main>;
}

export default MainLayout;
