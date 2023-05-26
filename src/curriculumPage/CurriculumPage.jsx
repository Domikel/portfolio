import './CurriculumPage.css'
import PageLayout from '../pageLayout/PageLayout'
import { useState } from 'react'

function CurriculumPage() {

    const [selectedCv, setSelectedCv] = useState('curriculum-en')
    const [valuebutton, setValueButton] = useState("download")



    const HandlerCv = (event) => {
        setSelectedCv(event.target.value)

        if (event.target.value === "lebenslauf") {
            setValueButton("Herunterladen")

        } if (event.target.value === "curricullum-es") { setValueButton("Descargar") } if(event.target.value==="curriculum-en"){setValueButton("Download")}

    }

    const leftMainCurriculum=(
        <h1 className="contactme">Download <span className='me'>Me</span></h1>

    )
    const curricullumSelect = (
        <div className='main-curriculumRight'>

            <select value={selectedCv} onChange={HandlerCv}>
                <option value="curriculum-en">Curriculum Vitae (En)</option>
                <option value="lebenslauf">LebensLauf (De)</option>
                <option value="curricullum-es">Curriculum(Es) </option>
            </select>

            <button className='curriculum-button'>{valuebutton}</button>
        </div>)


    return (

        <PageLayout  left={leftMainCurriculum} right={curricullumSelect}></PageLayout>
    )
}

export default CurriculumPage