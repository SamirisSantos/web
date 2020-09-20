import React from 'react'


import './styles.css'

export default function Board() {
    return (
        <div id="page-board">
            <div className="table-conteiner">
                <p>Mensagens Enviadas (003)</p>
                <div className="input-date">
                    <div> De: <input type="date"></input> </div>
                    <div> Até: <input type="date"></input> </div>
                </div>

                <table>
                    <thead>
                        <th>
                            Data
                    </th>
                        <th>
                            Enviado para
                    </th>
                        <th>
                            Mensagem
                    </th>
                        <th></th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20.08</td>
                            <td>Todos</td>
                            <td>Você poderia responder 3 perguntas para nossa ...</td>
                            <td><button>Enviar Novamente</button></td>
                        </tr>
                        <tr>
                            <td>25.08</td>
                            <td>Bráulio Farinha</td>
                            <td>Bruno amanhã é sua primeira consulta em nossa...</td>
                            <td><button>Enviar Novamente</button></td>
                        </tr>
                        <tr>
                            <td>25.08</td>
                            <td>Izabela Pinheiros</td>
                            <td>Izabela Pinheiros, gostaria de uma receita...</td>
                            <td><button>Enviar Novamente</button></td>
                        </tr>
                        <tr>
                            <td>28.08</td>
                            <td>Fabíola Brito</td>
                            <td>Fabíola Brito, sentimos sua falta. Está com...</td>
                            <td><button>Enviar Novamente</button></td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
            <div className="table-conteiner">
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
    )
}
