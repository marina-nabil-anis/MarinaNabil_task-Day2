import './InfoPage.css'
import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/icon-arrow.svg'

function InfoPage(){
    return(
        <div id='InfoDiv'>
            <div id='littleInfo'>
            <img id='logo' src={Logo}/>
            <div id='MyLabels'>
                <h1 id='Were'>WE'RE</h1>
                <h1 class='coming'>COMING</h1>
                <h1 class='coming'>SOON</h1>
            </div>
            <p>Hello fellow shoppers! We're currently building our new fashion store. 
            Add your email below to stay up-to-date with announcements and our launch deals.</p>

            <div id='MyMail'>
                <input placeholder='Email Address' ></input>
                <button id='MyBTN'><img id='Arrow' src={Arrow}/></button>
            </div>

            </div>
        </div>

    )

}

export default InfoPage