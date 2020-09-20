import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

import './styles.css'

export default function Message() {
    return (
        <div id="page-message">
            <PageHeader></PageHeader>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="body">
                    <p>Mensagens</p>
                    <form>
                        <fieldset>
                            Enviar para:
                            <div className="select-block">
                                <select name="select">
                                    <option value="todos" selected> Todos</option>
                                    <option value="perca"> Meta - Perca de peso</option>
                                    <option value="ganhopeso"> Meta - Ganha de peso</option>
                                    <option value="ganho"> Meta - Ganho de Massa magra</option>
                                    <option value="manutecao">Bráulio Farinha</option>
                                    <option value="manutecao">Bruno Machado</option>
                                    <option value="manutecao"> Dália Naves</option>
                                    <option value="manutecao"> Denise Siquera</option>
                                    <option value="manutecao"> Fabíola Brito</option>
                                    <option value="manutecao"> Izabela Pinheiros</option>
                                </select>
                            </div>
                        </fieldset>
                        <fieldset>
                            <div className="message">
                                Mensagem:
                                <textarea>
                                </textarea>
                            </div>
                        </fieldset>
                        <footer>
                            <button type="submit">
                                Enviar mensagem
                            </button>
                        </footer>
                    </form>
                    <div className="buttons-container">

                    </div>
                </div>
            </div>
        </div>
    )
}
