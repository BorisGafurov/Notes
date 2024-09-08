
import './App.css';
import Header from './components/Header/Header.jsx';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import Body from './layouts/Body/Body.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import { useState } from 'react';


const INITIAL_DATA = [
    {
      id: 1,
      title: 'Подготовка к обновлению курсов',
      text: 'Горные подходы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      id: 2,
      title: 'Поход в годы',
      text: 'Думал, что очень много времени',
      date: new Date()
    }
  ];

function App() {

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
        id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
        text: item.text,
        title: item.title,
        date: new Date(item.date)
    }]);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList items={items}/>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  );
}

export default App;
