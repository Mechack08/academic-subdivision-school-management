import React from 'react'
import './ecoles.css'

const Ecoles = () => {
  return (
    <div className='ecoles-container'>
       <table>
            <thead>
                <tr className='header'>
                    <th>Code</th>
                    <th>Nom de l'institution</th>
                    <th>Regime</th>
                    <th>Commune</th>
                    <th>Quartier</th>
                    <th>Eleves</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BG001</td>
                    <td>Institut Malikiya Wa mbingu</td>
                    <td>Catolique</td>
                    <td>Mulekera</td>
                    <td>Butenze</td>
                    <td>3,620</td>
                </tr>
                <tr>
                    <td>BG002</td>
                    <td>Institut Kasongomi</td>
                    <td>Catolique</td>
                    <td>Mulekera</td>
                    <td>Ksongomi</td>
                    <td>890</td>
                </tr>
                <tr>
                    <td>BG003</td>
                    <td>Institut Kitulu</td>
                    <td>Catolique</td>
                    <td>Mulekera</td>
                    <td>Kitulu</td>
                    <td>5,020</td>
                </tr>
                <tr>
                    <td>BG004</td>
                    <td>Institut Vungi</td>
                    <td>Catolique</td>
                    <td>Mulekera</td>
                    <td>Butenze</td>
                    <td>3,620</td>
                </tr>
                <tr>
                    <td>BG005</td>
                    <td>Institut de l'avenir de Bbo</td>
                    <td>Privee</td>
                    <td>Mulekera</td>
                    <td>Mairie</td>
                    <td>3,100</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Ecoles