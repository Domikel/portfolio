import HeaderLayout from "./headerLayout/HeaderLayout"
import MainLayout from "./mainLayout/MainLayout"
import './PageLayout.css'


function PageLayout(props){
    return (
      <div className="lay-out">
        <HeaderLayout>

        </HeaderLayout>

        <MainLayout>
          <div className="main-left">{props.left}</div>

          <div className="main-right">{props.right}</div>
        </MainLayout>
      </div>
    );
}


export default PageLayout