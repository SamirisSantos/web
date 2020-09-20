import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import Sidebar from '../../components/Sidebar/Sidebar'

import './styles.css'

export default function Contatcs() {
    return (
        <div id="page-Dashboard">
            <PageHeader></PageHeader>
            <div className="container">
                <Sidebar></Sidebar>
                <div className="body">

                    <div className="table-conteiner">
                        <p>Adicionar Contato</p>
                        <div className="contact-container">

                        <div className="input-block">
                            Nome: <input type="text"></input>
                        </div>
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
                                Número: <input type="text"></input>
                            </div>
                            <button>
                                Adicionar
                            </button>
                        </div>
                        
                        <p>Lista de Contatos (006)</p>
                        <table>
                            <thead>
                                <th>
                                    Nome
                    </th>
                                <th>
                                    Categoria
                    </th>
                                <th>
                                    Número
                    </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Bráulio Farinha</td>
                                    <td>Meta - Perca de peso</td>
                                    <td> +55 11 98888-6656</td>
                                </tr>
                                <tr>
                                    <td>Bruno Machado</td>
                                    <td>Meta - Ganho de Massa magra</td>
                                    <td> +55 11 99198-1685</td>
                                </tr>
                                <tr>
                                    <td>Dália Naves</td>
                                    <td>Meta - Ganho de Massa magra</td>
                                    <td> +55 11 96732-9362</td>
                                </tr>
                                <tr>
                                    <td>Denise Siquera</td>
                                    <td>Meta - Perca de peso</td>
                                    <td> +55 11 95609-0074</td>
                                </tr>
                                <tr>
                                    <td>Fabíola Brito</td>
                                    <td>Meta - Ganha de peso</td>
                                    <td> +55 11 91430-5533</td>
                                </tr>
                                <tr>
                                    <td>Izabela Pinheiros</td>
                                    <td>Meta - Manuteção do peso</td>
                                    <td> +55 11 96505-9651</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
