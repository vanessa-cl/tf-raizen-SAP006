import React, { useEffect } from 'react';
import { useState } from 'react';
import "./FormTicket.scss";
import validateForm from "./Validate.js";
import Footer from "../Footer/Footer";
import swal from 'sweetalert';

const FormTicket = () => {
    const [ticketInfo, setTicketInfo] = useState({
        title: '',
        sector: '',
        description: '',
        contact: '',
    });

    const [messages, setMessages] = useState("");

    const handleChange = (e) => {
        return setTicketInfo(() => {
            const auxValues = { ...ticketInfo };
            auxValues[e.target.name] = e.target.value;
            setMessages(() => validateForm(auxValues).message);
            return auxValues;
        });
    };

    const handleSend = (e) => {
        e.preventDefault();
        setMessages(() => validateForm(ticketInfo).message)
        if (validateForm(ticketInfo).validationFulfilled === true) {
            swal({
                title: "Chamado aberto com sucesso!",
                icon: "success",
                button: "Ok",
            });
        } else {
            swal({
                title: "Preencha os campos corretamente",
                icon: "error",
                button: "Ok",
                className: "modal"
            });
        }
    }

    useEffect(() => {
        return messages;
    }, [messages]);

    return (
        <>
            <form className="form-body">
                <label className="form-main-label">Novo chamado</label>
                <label className="form-label" htmlFor="sector">Setor</label>
                <div className="input-area">
                    <select className="form-input effect sector" name="sector" autoComplete="off" required onChange={handleChange}>
                        <option value="">Selecione um setor</option>
                        <option value="recursos-humanos">Recursos humanos</option>
                        <option value="tecnologia-da-informação">Tecnologia da informação</option>
                        <option value="transações-financeiras">Transações financeiras</option>
                        <option value="facilities">Facilities</option>
                    </select>
                    <span className="focus-border"></span>
                </div>
                <label className="form-label" htmlFor="contact">Como podemos te contatar?</label>
                <div className="input-area">
                    <input className="form-input effect contact" name="contact" type="text" placeholder="Insira um endereço de email ou um número de telefone/Whatsapp" required onChange={handleChange}></input>
                    <span className="focus-border"></span>
                </div>
                <label className="form-label" htmlFor="title">Título</label>
                <div className="input-area">
                    <input className="form-input effect title" name="title" type="text" autoComplete="off" placeholder="Informe o título do chamado" required onChange={handleChange}></input>
                    <span className="focus-border"></span>
                </div>
                <label className="form-label" htmlFor="description">Descrição</label>
                <div className="input-area">
                    <input className="form-input effect description" name="description" type="text" autoComplete="off" placeholder="Detalhe a sua requisição/problema" required onChange={handleChange}></input>
                    <span className="focus-border"></span>
                </div>
                <label className="form-label" htmlFor="file">Selecione um arquivo</label>
                <label for="file-input" className="file-icon">
                    <i className="fas fa-paperclip file-icon"></i>
                    <i className="fas fa-camera file-icon"></i>
                    <p className="form-notice">Limite máximo de 10MB</p>
                </label>
                <input id="file-input" className="form-input" name="file" type="file" method="POST" encType="multipart/form-data" onChange={handleChange}></input>
                <button className="form-button send" onClick={handleSend}>Enviar solicitação</button>

            </form>
            <Footer />
        </>
    )
}

export default FormTicket;

