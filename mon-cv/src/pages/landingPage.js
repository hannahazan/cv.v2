import '../css/index.css'
import '../css/landingPage.css'
import '../css/mobileResponsive.css'
import cross from '../pictures/xmark-solid.svg'
import { Home } from 'tabler-icons-react';
import { Code } from 'tabler-icons-react';
import { Database } from 'tabler-icons-react';
import { DeviceMobile } from 'tabler-icons-react';
import { PencilPlus } from 'tabler-icons-react';
import { Menu2 } from 'tabler-icons-react';
export default function Landing(){
   
    const changeClassMenu=()=>{
        document.getElementById('navListrespon').className ="responsivenavList2"
        document.getElementById('contMenu').className="containerMenu2"
        document.getElementById('Cross').className='cross2'
        document.getElementById('Line1').className="line2";
        document.getElementById('Line2').className="line2";
        document.getElementById('Line3').className="line2";
        document.getElementById('Line4').className="line2";
        document.getElementById('Line5').className="line2";    
    }
    const changeClassCross=()=>{
        document.getElementById('navListrespon').className ="responsivenavList";
        document.getElementById('contMenu').className="containerMenu"
        document.getElementById('Cross').className='cross'
    }
   
   window.addEventListener("resize",(event) => {
        if(window.innerWidth>=820){
            document.getElementById('navListrespon').className ="responsivenavList"
            document.getElementById('Cross').className='cross'
    
        }
        else{
            document.getElementById('contMenu').className="containerMenu"
        }
    })
    return(
   <div className="all">     
        <header>
            <div className="displayFiltre"> 
                <nav className="navBar">
                    <Home
                    size={30}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='home'
                    />
                    <ul className="navList">
                        <li>À propos</li>
                        <li>Compétences</li>
                        <li>Parcours</li>
                        <li>Réalisations</li>
                        <li>Contact</li>
                    </ul>
                    <div className='containerMenu' id="contMenu"><Menu2
                    size={48}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='menu'
                    onClick={changeClassMenu}
                    />
                    </div>
                    <img src={cross} className='cross' id="Cross" onClick={changeClassCross}></img>
                </nav>
                <ul className="responsivenavList"  id="navListrespon">
                    <li className='responLi'>
                        À propos   
                    </li>
                    <div className='line' id="Line1"></div>
                    <li className='responLi'>
                        Compétences
                    </li>
                    <div className='line' id="Line2"></div>
                    <li className='responLi'>
                        Parcours
                    </li>
                    <div className='line' id="Line3"></div>
                    <li className='responLi'>
                        Réalisations
                    </li>
                    <div className='line' id="Line4"></div>
                    <li className='responLi'>
                        Contact
                    </li>
                    <div className='line'id="Line5"></div>
                </ul>
                <section className="devP">
                    <div className="devPblock1">
                        <p>Bonjour, je m'appelle Hannah et je recherche</p>
                    </div>
                    <div className="devPblock2">
                        <p className="devPblock2Ele">une</p>
                        <p className="devPblock2Ele" id="alter">Alternance</p>
                        <p className="devPblock2Ele"> en tant que</p>
                        <p className="devPblock2Ele" id="dev">Développeuse Web Full-stack</p>    
                    </div>
                    <p className="devPblock2Resp">une Alternance en tant que Développeuse web Full-stack</p>
                    <div>
                        <p>sur Paris et sa région</p>
                    </div>
                </section>
                <section className="picto">
                    <div className="pictoAndP">
                        <Code
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Front-end</p>
                    </div>
                    <div className="pictoAndP">
                        <Database
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Back-end</p>
                    </div>
                    <div className="pictoAndP">
                        <DeviceMobile
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Mobile</p>
                    </div>
                    <div className="pictoAndP">
                        <PencilPlus
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Design</p>
                    </div>
                </section>
            </div>
        </header>
        <main></main>
    </div> 

    )
}