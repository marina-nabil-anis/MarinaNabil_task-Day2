import './IMG.css'
import MyIMG from '../../assets/hero-desktop.jpg'

function IMG (){
    return(
<div id='IMGDiv'>
    <img id='MyIMG' src={MyIMG}/>
</div>
    )
}

export default IMG