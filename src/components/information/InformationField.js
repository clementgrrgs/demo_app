function InformationField ({label, info}){

    return (
        <div>
            <h6 aria-label="label-field">{label}</h6> 
            <p aria-label="label-info">{info}</p>
        </div>
    );
}

export default InformationField;