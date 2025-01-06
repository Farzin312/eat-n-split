import { useState } from 'react';
import Button from './Button';
export default function AddFriend({onAddFriend}) {
 const [ name, setName ] = useState('');
 const [ image, setImage ] = useState('https://i.pravatar.cc/48');

    function handleSubmit(e) {
        e.preventDefault();
        const id = crypto.randomUUID

        if (!name) {
            alert('Please enter a name');
            return;
        }

        if (!image) {
            alert('Please enter an image URL');
            return;
        }
        
        const newFriend = { id, name, image: `${image}?=${id}`, balance: 0, };
        onAddFriend(newFriend);

        setName('');
        setImage('https://i.pravatar.cc/48');
    }

    return (
        <form className="form-add-friend" onSubmit={handleSubmit}>
           
           <label>👬 Friend Name</label>
           <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Enter your friend name' />
               
            <label>🌌 Image URL</label>
           <input type='text' value={image} onChange={e => setImage(e.target.value)} placeholder='Enter image URL'/>

           <Button>Add Friend</Button>
        </form>
    )
}