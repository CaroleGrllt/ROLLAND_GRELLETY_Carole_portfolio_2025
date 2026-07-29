import Button from '../components/Button'

export default function Home() {
    return(
        <>
            <section className='home-hero-section'>
                <h1>Développeuse de sites et<br className='br-display'/> applications web <br className='br-display'/>performants et modernes</h1>
                <div className="home-cta-container">
                    <Button 
                        title='ME CONTACTER'
                        linkTo='/contact'
                        variant='dark-button'
                    />
                    <Button 
                        title='MES PROJETS'
                        linkTo='/projets'
                        variant='light-button'
                    />
                </div>
            </section>
            <section className="home-introduction-section">
                <div className="introduction-container">
                    <div className="img-container"></div>
                    <div className="txt-container">
                        <div className="availability-content">
                            <div className="availability-content-point"></div>
                            <div className="availability-content-txt"></div>
                        </div>
                        <div className="presentation-content">
                            <div className="presentation-content-iam">Bienvenue ! Je suis...</div>
                            <div className="presentation-content-name">
                                Carole ROLLAND GRELLETY
                            </div>
                            <div className="presentation-content-spe">
                                Spécialisée en développement front-end (JavaScript-React), mes compétences en back-end me permettent d’avoir une approche et une compréhension globales d’un projet et de développer des applications full-stack de bout en bout. 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}