import '../css/index.css'
import '../css/landingPage.css'
import '../css/mobileResponsive.css'
import { Home } from 'tabler-icons-react';
import { Code } from 'tabler-icons-react';
import { Database } from 'tabler-icons-react';
import { DeviceMobile } from 'tabler-icons-react';
import { PencilPlus } from 'tabler-icons-react';
import { Menu2 } from 'tabler-icons-react';
export default function Landing(){
    return(
   <div class="all">    
        <header>
            <div class="displayFiltre"> 
                <nav class="navBar">
                    <Home
                    size={30}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='home'
                    />
                    <ul class="navList" id="navListrespon">
                        <li>À propos</li>
                        <li>Compétences</li>
                        <li>Parcours</li>
                        <li>Réalisations</li>
                        <li>Contact</li>
                    </ul>
                    <Menu2
                    size={48}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='menu'
                    />
                </nav>
                <section class="devP">
                    <div class="devPblock1">
                        <p>Bonjour, je m'appelle Hannah et je recherche</p>
                    </div>
                    <div class="devPblock2">
                        <p class="devPblock2Ele">une</p>
                        <p class="devPblock2Ele" id="alter">Alternance</p>
                        <p class="devPblock2Ele"> en tant que</p>
                        <p class="devPblock2Ele" id="dev">Développeuse Web Full-stack</p>    
                    </div>
                    <p class="devPblock2Resp">une Alternance en tant que Développeuse web Full-stack</p>
                    <div>
                        <p>sur Paris et sa région</p>
                    </div>
                </section>
                <section class="picto">
                    <div class="pictoAndP">
                        <Code
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Front-end</p>
                    </div>
                    <div class="pictoAndP">
                        <Database
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Back-end</p>
                    </div>
                    <div class="pictoAndP">
                        <DeviceMobile
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Mobile</p>
                    </div>
                    <div class="pictoAndP">
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