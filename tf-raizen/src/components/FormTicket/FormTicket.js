import React, { useEffect } from "react";
import { useState } from 'react';
import "./FormTicket.scss"
import validateForm from "./Validate.js";

const FormTicket = () => {
    const [ticketInfo, setTicketInfo] = useState({
        title: "",
        sector: "",
        description: "",
        contact: "",
    })

    const [messages, setMessages] = useState("")

    const handleChange = (e) => {
        return setTicketInfo(() => {
            const auxValues = { ...ticketInfo };
            auxValues[e.target.name] = e.target.value;
            setMessages(() => validateForm(auxValues).message)
            return auxValues;
        });
    };

    const handleSend = (e) => {
        e.preventDefault();

    }

    useEffect(() => {
        return messages
    }, [messages])

    return (
        <>
            <label className="form-main-label">Novo chamado</label>
            <form className="form-body">
                <label className="form-label" htmlFor="title">Título</label>
                <input className="form-input" name="title" type="text" autoComplete="off" placeholder="Informe o título do chamado" required onChange={handleChange}></input>
                <label htmlFor="sector">Setor</label>
                <select className="form-input" name="sector" autoComplete="off" required onChange={handleChange}>
                    <option value="">Selecione um setor</option>
                    <option value="recursos-humanos">Recursos humanos</option>
                    <option value="tecnologia-da-informação">Tecnologia da informação</option>
                    <option value="transações-financeiras">Transações financeiras</option>
                    <option value="facilities">Facilities</option>
                </select>
                <label className="form-label" htmlFor="description">Descrição</label>
                <input className="form-input" name="description" type="text" placeholder="Descrição do chamado" required onChange={handleChange}></input>
                <label className="form-label" htmlFor="number">Telefone</label>
                <input className="form-input" type="number" placeholder="Ex: 19 3403-5000" required onChange={handleChange}></input>
                <label className="form-label" htmlFor="file">Selecione um arquivo</label>
                <input className="form-input" name="file" type="file" method="POST" encType="multipart/form-data" onChange={handleChange}></input>
                <label className="form-label">Limite máximo de 10MB</label>
                <section className="buttons">
                    <button className="form-button">Cancelar</button>
                    <button className="form-button" onClick={handleSend}>Enviar solicitação</button>
                </section>
            </form>
        </>
    )
}

export default FormTicket;