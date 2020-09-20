import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

export default function MessageSent() {
    return (
        <div id="page-Dashboard">
            <PageHeader></PageHeader>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="body">
                    <p>Conversas</p>
                    <div className="contact-container">
                        <div className="select-block">
                            Categoria:
                                <select name="select">
                                <option value="todos" selected> Todos</option>
                                <option value="perca"> Meta - Perca de peso</option>
                                <option value="ganhopeso"> Meta - Ganha de peso</option>
                                <option value="ganho"> Meta - Ganho de Massa magra</option>
                                <option value="manutecao">Nova Categoria</option>
                            </select>
                        </div>
                        <div className="input-block">
                            Buscar: <input type="text"></input>
                        </div>
                        <button>
                            Buscar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
