import HeaderLayout from './headerLayout/HeaderLayout';
import MainLayout from './mainLayout/MainLayout';
import './PageLayout.css';

function PageLayout(props) {
  return (
    <div className="lay-out">
      <HeaderLayout></HeaderLayout>

      <MainLayout>
      {props.children}
      </MainLayout>
    </div>
  );
}

export default PageLayout;
