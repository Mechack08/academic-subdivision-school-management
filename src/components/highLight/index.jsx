import React from 'react'
import './highlight.css'
import {BsArrowUpRightCircleFill, BsArrowDownLeftCircleFill} from 'react-icons/bs'

const HighLight = () => {
  return (
    <div className='highlight-container'>
        <div className="box">
            <span className="box-title">Eleves & Ecoliers</span>
            <div className="box-number">
                <span className="box-number-student">12,756</span>
                <BsArrowUpRightCircleFill className='box-icon up' />
            </div>
            <div className="box-amount">
                <span className="box-amount-gars">Garcons: 1570</span>
                <span className="box-amount-filles">Filles: 1186</span>
            </div>
        </div>
        <div className="box">
            <span className="box-title">Secondaires</span>
            <div className="box-number">
                <span className="box-number-student">2756</span>
                <BsArrowUpRightCircleFill className='box-icon up' />
            </div>
            <div className="box-amount">
                <span className="box-amount-gars">Garcons: 1,570</span>
                <span className="box-amount-filles">Filles: 1,186</span>
            </div>
        </div>
        <div className="box">
            <span className="box-title">Primaires</span>
            <div className="box-number">
                <span className="box-number-student">2756</span>
                <BsArrowDownLeftCircleFill className='box-icon down' />
            </div>
            <div className="box-amount">
                <span className="box-amount-gars">Garcons: 1570</span>
                <span className="box-amount-filles">Filles: 1186</span>
            </div>
        </div>
        <div className="box">
            <span className="box-title">Finalistes</span>
            <div className="box-number">
                <span className="box-number-student">2756</span>
                <BsArrowUpRightCircleFill className='box-icon up' />
            </div>
            <div className="box-amount">
                <span className="box-amount-gars">Sec.: 1570</span>
                <span className="box-amount-filles">Prim.: 1186</span>
            </div>
        </div>
    </div>
  )
}

export default HighLight