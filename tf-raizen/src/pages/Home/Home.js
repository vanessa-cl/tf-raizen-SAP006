import { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import Title from '../../components/Title/Title';

function Home() {
  let info = gsap.timeline();

  useEffect(() => {
    info.from('.info', { duration: 1, y: 30, opacity: 0 });
  }, []);

  return (
    <>
      <article className="page">
        <section className="inner">
          <Title lineContent="Centro de Serviços" />
        </section>
        <section>
          <p className="info"></p>
        </section>
      </article>
    </>
  );
}

export default Home;
