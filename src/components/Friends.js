import MapFriend from './MapFriend';
import '../styles.css';
export default function Friends({friends, onSelectFriend, selectedFriend}){
    return(
        <ul>
            {friends.map((friend) => 
            <MapFriend key={friend.id} friend={friend}  onSelectFriend={onSelectFriend} 
            selectedFriend={selectedFriend}
            />)}
        </ul>
    )
}