import integration from '../../images/integration.png'

function MessageSection() {
    return (
        <section className="message-container">
            <div className="flex-items">
                <h3 className="message">Energia que mobiliza</h3>
            </div>
            <div className="flex-items">
                <img className="image" src={integration} alt="Ilustração mostrando integração"/>
            </div>
        </section>
    )
}

export default MessageSection
