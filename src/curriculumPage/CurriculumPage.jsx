import './CurriculumPage.css'
import PageLayout from '../pageLayout/PageLayout'
import { useState } from 'react'
import DeutschCV from  './../cv/Deutsch-cv.pdf'
import EnglischCV from'../cv/English-cv.pdf'



function CurriculumPage() {
    const [selectedCv, setSelectedCv] = useState('curriculum-en')
    const [valuebutton, setValueButton] = useState("download")



    const HandlerCv = (event) => {

        setSelectedCv(event.target.value)

    if (event.target.value === "lebenslauf") {
        setValueButton("Herunterladen")
    } else if (event.target.value === "curricullum-es") {
         setValueButton("Descargar")
    } else if (event.target.value === "curriculum-en") {
         setValueButton("Download")
    }
    };


    const leftMainCurriculum = (<h1 className="contactme">Download <span className='me'>Me</span></h1>)


    const openPDf = () => {

        if (selectedCv === "lebenslauf") { window.open(DeutschCV, 'blank') }
        if (selectedCv === "curriculum-en") {
            window.open(EnglischCV, 'blank')
        }

    }

    const curricullumSelect = (
        <div className='main-curriculumRight'>

            <select value={selectedCv} onChange={HandlerCv}>
                <option value="curriculum-en">Curriculum Vitae (En)</option>
                <option value="lebenslauf">LebensLauf (De)</option>
                <option value="curricullum-es">Curriculum(Es) </option>
            </select>

            <button className='curriculum-button' onClick={openPDf}>{valuebutton}</button>
        </div>)


    return (

        <PageLayout left={leftMainCurriculum} right={curricullumSelect}></PageLayout>
    )
}

export default CurriculumPage