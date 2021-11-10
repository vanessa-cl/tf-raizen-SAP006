import React from 'react';
// import { Link } from "react-router-dom";
import './notFound.scss';
import lamp from "../../images/broken-lamp.png"
// import { Button } from "../../components/Button/button";

export default function NotFound() {
	return (
<div>

        <img src={lamp} className="broken-lamp" alt="lamp" />

		<div className="not-found">
			<p>404</p>
			<h2>Página não encontrada.</h2>
            <h3> Não se preocupe, você pode voltar e tentar novamente.</h3>
            {/* <Link to="/">
            <Button type="button"
            className="goHome"
            id="goHome" /> </Link> */}
		</div>
      </div>

	);
}