import './Main.css';
import '../../fonts/fonts.css'
import Grafik from '../Grafik/Grafik';
import Table from '../Table/Table';
import { useState } from 'react';
import array from '../../utils/constants'
function Main() {
  const [dataPeople, setDataPeople] = useState(
    {
      measurers: {
        title: 'Замерщики',
        users: [
          { id: 1, num: 1, name: 'Иванов Федор Сергеевич' },
          { id: 2, num: 2, name: 'Сидоров Андрей Валерьевич' },]
      }, managers: {
        title: 'Менеджеры',
        users: [
          { id: 3, num: 1, name: 'Воронов Игнатий Львович' },
          { id: 4, num: 2, name: 'Макаров Витольд Львович' },]
      },
      assembly: {
        title: 'Монтажная бригада',
        users: [
          { id: 5, num: 1, name: 'Симонов Федор Евсеевич' },
          { id: 6, num: 2, name: 'Сидоров Ипполит Андреевич' },]
      }
    }
  )
  const [groupPeople, setGroupPeople] = useState('measurers')
  
  const [isActive, setIsActive] = useState(false)
  const [activArray, setActivArray] = useState(array[1])


  return (
    <div className="Main">
      <h1 className='main__title'>Выберите,</h1>
      <p className='main__subtitle'>по кому смотреть отчет</p>
      <div className='main__button_list'>
        <button className='main__button_measurers button' onClick={() => setGroupPeople('measurers')} type='button'>Замерщики</button>
        <button className='main__button_managers button' onClick={() => setGroupPeople('managers')} type='button'>Менеджеры</button>
        <button className='main__button_assembly button' onClick={() => setGroupPeople('assembly')} type='button'>Монтажная<br />бригада</button>
      </div>
      <div className='section'>
        <div className='block'>
          <p className='title'>{dataPeople[groupPeople].title}</p>
          <div className='list'>
            {dataPeople[groupPeople].users.map((el) => (<div className='people_block'><p className='name_people' onClick={
              ()=>{
                  setActivArray(array[el.id])
              }
              }>{el.num}.{el.name}</p></div>))}
          </div>
        </div>
        <div className='block-two'>
          <div className='block-buttons'>
            <button className='button-schedule button' onClick={()=>{setIsActive(false)}} type='button'>График</button>
            <button className='button-table button' onClick={()=>{setIsActive(true)}} type='button'>Таблица</button>
          </div>
          <div className='block-result'>
              {isActive ? 
              <Table
                data = {activArray}
              />
              :
              <Grafik
                data = {activArray}
              />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
