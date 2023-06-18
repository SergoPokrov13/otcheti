import './Main.css';
import '../../fonts/fonts.css'
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
        <button className='main__button_measurers' onClick={()=>setGroup('measurers')} type='button'></button>
        <button className='main__button_managers' onClick={()=>setGroup('managers')} type='button'></button>
        <button className='main__button_assembly' onClick={()=>setGroup('assembly')} type='button'></button>
      </div>
      <div className='section'>
      <div className='block'>
        <p className='title'>{data[group].title}</p>
        <div className='list'>
          {data[group].users.map((el)=>( <p className='name_people'>{el.id}.{el.name}</p>))}
        </div>
      </div>
      <div className='block-two'>
          <button className='button-schedule' type='button'>График</button>
          <button className='button-table' type='button'>Таблица</button>
      </div>
      </div>
    </div>
  );
}

export default Main;
