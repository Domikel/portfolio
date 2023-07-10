import './CurriculumPage.css';
import PageLayout from '../pageLayout/PageLayout';
import { useState } from 'react';
import DeutschCV from './../cv/Deutsch-cv.pdf';
import EnglischCV from '../cv/English-cv.pdf';

function CurriculumPage() {
  const [selectedCv, setSelectedCv] = useState('curriculum-en');
  const [valuebutton, setValueButton] = useState('Download');

  const HandlerCv = (event) => {
    setSelectedCv(event.target.value);

    if (event.target.value === 'lebenslauf') {
      setValueButton('Herunterladen');
    } else if (event.target.value === 'curricullum-es') {
      setValueButton('Descargar');
    } else if (event.target.value === 'curriculum-en') {
      setValueButton('Download');
    }
  };

  const openPDf = () => {
    if (selectedCv === 'lebenslauf') {
      window.open(DeutschCV, 'blank');
    }
    if (selectedCv === 'curriculum-en') {
      window.open(EnglischCV, 'blank');
    }
  };

  return (
    <PageLayout>
      <div className="main-curriculum-left">
        <h1 className="download-me-title">
          Download <span className="me-title-curriculum">Me</span>
        </h1>
      </div>

      <div className="main-curriculum-right">
        <div className='selector-container'>
            <h1 className='h1-lenguage-selector'>Please select the language to download</h1>
            <select className="select-cv" value={selectedCv} onChange={HandlerCv}>
              <option value="curriculum-en">(En) Curriculum </option>
              <option value="lebenslauf">(De) Lebenslauf </option>
              <option value="curricullum-es">(Es) Curriculum </option>
            </select>
            <button className="curriculum-button" onClick={openPDf}>
              {valuebutton}
            </button>
        </div>
      </div>
      
    </PageLayout>
  );
}

export default CurriculumPage;
