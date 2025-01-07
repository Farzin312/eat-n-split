import { useState } from 'react';
import Friends from './components/Friends';
import AddFriend from './components/AddFriend';
import SplitBill from './components/SplitBill';
import Button from './components/Button';
import  initialFriends  from './data';
import './styles.css';
export default function App(){
    const [ showAddFriend, setShowAddFriend ] = useState(false);
    const [ friends, setFriends ] = useState(initialFriends);
    const [ selectedFriend, setSelectedFriend ] = useState(null);

    function handleShowAddFriend(){
        setShowAddFriend((showAddFriend) => !showAddFriend);
        setSelectedFriend(null);
    }

    function handleAddFriend(newFriend){
        setFriends(friends => [...friends, newFriend]);
        setShowAddFriend(false);
    }
    function handleSelectFriend(friend){
        setSelectedFriend((selected) => selected?.id === friend.id ? null : friend);
        setShowAddFriend(false);
    }

    function handleSplitBill(value){
        setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend));
        setSelectedFriend(null);
    }

    return(
        <div className="app">
            <div className="sidebar">
            <Friends friends={friends} onSelectFriend={handleSelectFriend} selectedFriend={selectedFriend}/>  
            {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />  }
            <Button onClick={handleShowAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
            </div>
            { selectedFriend && <SplitBill key={selectedFriend.id} selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
        </div>
    )
}