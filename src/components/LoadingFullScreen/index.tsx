import "./LoadingFullScreen.scss"
export default function LoadingFullScreen() {
    return <div className="loading">
        <div className='uil-ring-css' style={{transform: "scale(0.79)"}}>
            <div></div>
        </div>
    </div>
}