import {useEffect} from 'react'
import gsap, {Power3} from 'gsap';
import Title from '../../components/Title/Title'

function MyTickets() {
  let info = gsap.timeline()

  useEffect(() => {
    info.from('.info', {opacity: 0, ease: Power3.easeOut, delay: 0.2, y: 15}, 'Start')
  }, [])


    return (
      <>  
        <article className="page">
          <section className="inner">
              <Title lineContent="Meus Tickets"/>
          </section>

          <section>
              <p className="info">
                
              </p>
          </section>
        </article>
      </>
    )
}

export default MyTickets