import React from 'react';

function MedicalTreatment (prop) {

    function toString(prop){
        return "[" + "id = " +prop.id + " , courseId = "+prop.CourseId+ " , type = " + prop.type+" , category = " +prop.category + " , name = " + prop.name + " , startDate = " +prop.startDate +"]";
    }

    return (
        <div>
            {toString(prop)};  
        </div>
    );
}

export default MedicalTreatment;// MedicalTreatmentPanel.js

import React from 'react';


function ProductPanel(){

    const [treatId, settreatId] = React.useState('');

    const [treatCourseId, settreatCourseId] = React.useState('');

    const [treatType, settreatType] = React.useState('');

    const [treatCategory, settreatCategory] = React.useState('');

    const [treatName, settreatName] = React.useState('');

    const [treatStartDate, settreatStartDate] = React.useState('');


    function showClickHandler () {
        window.alert("[" + "id = "+ treattId + ", courseId = "+treatCourseId+ ", type = "+ treatType +", category =" +treatCategory +" name = " + treatName + "startdate = " + treatStartDate + "]");

    }

    
    function clearClickHandler () {
        setTreattId('');
        setTreatCourseId('');
        setTreatType('');
        setTreatCategory('');
        setTreatName('');
        setStartDate('');

    }


    return(
        <div>

            <input placeholder="Treat ID" value={treatId}  onChange = { e => settreatId(e.target.value)}  ></input>

            <br/>

            <input placeholder="Treat CourseId" value={treatCourseId}  onChange = { e => settreatCourseId(e.target.value)}  ></input>

            <br/>

            <input placeholder="Treat Type" value={treatType}  onChange = { e => settreatType(e.target.value)}  ></input>
            
            <br/>

            <input placeholder="Treat Category" value={treatCategory}  onChange = { e => settreatCategory(e.target.value)}  ></input>

            <br/>

            <input placeholder="Treat Name" value={treatName}  onChange = { e => settreatName(e.target.value)}  ></input>

            <br/>

            <input placeholder="Treat StartDate" value={treatStartDate}  onChange = { e => settreatStartDate(e.target.value)}  ></input>

            <br/>

            <button style={{color:"grey"}} onClick={showClickHandler}>show</button>

            <button style={{color:"pink"}} onClick={clearClickHandler}>Clear</button>

            <br/><br/><br/><br/>

            <input placeholder="Some value"></input>

        </div>
    );

}

export default MedicalTreatmentPanel;