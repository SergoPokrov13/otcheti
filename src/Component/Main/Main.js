import './Main.css';
import '../../fonts/fonts.css'
import Example from '../Grafik/Grafik';
import { useState } from 'react';
function Main() {
  const [data, setData] = useState(
    {
      measurers: {
        title: 'Замерщики',
        users: [
          { id: 1, name: 'Иванов Федор Сергеевич' },
          { id: 2, name: 'Сидоров Андрей Валерьевич' },
          { id: 3, name: 'Нагаев Виктор Сергеевич' }]
      }, managers: {
        title: 'Менеджеры',
        users: [
          { id: 1, name: 'Иванов Федор Сергеевич' },
          { id: 2, name: 'Сидоров Андрей Валерьевич' },
          { id: 3, name: 'Нагаев Виктор Сергеевич' }]
      },
      assembly: {
        title: 'Монтажная бригада',
        users: [
          { id: 1, name: 'Иванов Федор Сергеевич' },
          { id: 2, name: 'Сидоров Андрей Валерьевич' },
          { id: 3, name: 'Нагаев Виктор Сергеевич' }]
      }
    }
  )
  const [group, setGroup] = useState('measurers')



  return (
    <div className="Main">
      <h1 className='main__title'>Выберите,</h1>
      <p className='main__subtitle'>по кому смотреть отчет</p>
      <div className='main__button_list'>
        <button className='main__button_measurers button' onClick={() => setGroup('measurers')} type='button'>Замерщики</button>
        <button className='main__button_managers button' onClick={() => setGroup('managers')} type='button'>Менеджеры</button>
        <button className='main__button_assembly button' onClick={() => setGroup('assembly')} type='button'>Монтажная<br />бригада</button>
      </div>
      <div className='section'>
        <div className='block'>
          <p className='title'>{data[group].title}</p>
          <div className='list'>
            {data[group].users.map((el) => (<div className='people_block'><p className='name_people'>{el.id}.{el.name}</p></div>))}
          </div>
        </div>
        <div className='block-two'>
          <div className='block-buttons'>
            <button className='button-schedule button' type='button'>График</button>
            <button className='button-table button' type='button'>Таблица</button>
          </div>
          <div className='block-result'>
              <Example/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
