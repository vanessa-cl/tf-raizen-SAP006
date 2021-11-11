import {useEffect} from 'react'
import gsap, {Power3} from 'gsap';


function Title({lineContent}) {
    let line = gsap.timeline()

    useEffect(() => {
      line.from('.line', {opacity: 0, ease: Power3.easeOut, delay: 0.2, y: -30}, 'Start')
    }, [])


    return (
      <h1 className="page-title">
        <div className="line-wrap">
          <p className="line">
            {lineContent}
          </p>
        </div>
      </h1>
    )
}

export default Title
