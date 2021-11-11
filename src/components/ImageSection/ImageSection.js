import integration from '../../images/integration.png'
import './ImageSection.scss'

function ImageSection() {
    return (
        <section className="image-container">
                <img className="image-people" src={integration} alt="Ilustração mostrando integração"/>
        </section>
    )
}

export default ImageSection
