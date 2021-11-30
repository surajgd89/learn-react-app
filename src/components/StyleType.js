
import '../components/StyleType.css'
import commonClass from '../custom.module.css'

function StyleType() {
    return (
        <div className="text-center">
            <h1>Style Types In React</h1>

            {/* INLINE CSS Write in CamelCase */}
            <div style={{ color: "#fff", backgroundColor: "black", marginBottom: "20px" }}>Javed Sayyed</div>

            {/* CLASS */}
            <div className="cssstyle1">Suraj Patil</div>

            {/* MODULE STYLE */}
            <div className={commonClass.cssstyle2}>Rohitashwa Pandey</div>
            <div className={`${commonClass.cssstyle3} ${commonClass.bold_800}`}>Jamshed Ahmed</div>

        </div>
    )
}

export default StyleType;