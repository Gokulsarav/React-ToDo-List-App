import { useState } from 'react';

import './App.css';
import './Header.css';
import SearchItem from './SearchItem';
import Header from './Header';
import Footer from './Footer';
import Higherfun from './Higherfun';
import Additem from './Additem';

function App() {
    const [items,setitem] = useState([
        {id:1,name:"CODING",checked:false},
        {id:2,name:"LEARNING",checked:false},
        {id:3,name:"DEVELOP",checked:true},
    ]
    );

    const [New,setNew]=useState('')

    const[Search,setSearch]=useState('')

    const addition = (item)=>{
      if(!item) return;
      const id= items.length? items[items.length -1].id+1 :1;
      const addItem={id, checked:false,name:item}
      const listItems =[...items,addItem]
      setitem(listItems)
    }

    const changed = (id) => {
        const nums = items.map(
            (item) => item.id === id ? {...item,checked:!item.checked}: item
        )
        setitem(nums)
    }

    function del2(id){
      const nums = items.filter((item) => 
      item.id !== id )
      setitem(nums)
    }

    const sub=(e)=>{
      e.preventDefault()
      if (!New) return;
      addition(New)
      setNew("")
      localStorage.setItem('todolist',JSON.stringify(New))
    }

  return (
    <div className='App'>
      <Header title='TO-DO LIST' />
      <Additem 
        New={New}
        setNew={setNew}
        sub={sub}
      />
      <SearchItem 
        Search={Search}
        setSearch={setSearch}
      />
      <Higherfun 
      items={items.filter(item => ((item.name).toLowerCase()).includes(Search.toLowerCase()))}
      changed={changed}
      del2={del2}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
