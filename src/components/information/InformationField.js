/** 
 *  Show a Label/Information field from parameters
 * @param {string} label - The label of the field 
 * @param {string} info - The information of the field 
 */

function InformationField ({label, info}){

    return (
        <div className="row" style={{marginBottom: "0"}}>
            <p aria-label="label-field" className="col s2"><b>{label}</b></p> 
            <div className="divider"></div>
            <p aria-label="label-info" className="col s10">{info}</p>
        </div>
    );
}

export default InformationField;