import React, {useState} from 'react';
import http from '../http';


const InputForm = ({lat, long, pin, setPin, setNewPlace}) => {
    const [title, setTitle] = useState(null)
    const [desc, setDesc] = useState(null)
    const [rating, setRating] = useState()

    const createPin = async (e) => {
        e.preventDefault();

        const newPin = {
            username: 'currentUser',
            title,
            desc,
            rating,
            lat: lat,
            long: long,
            
          };
          console.log(newPin.lat, newPin.long, pin)
          try {
            const res = await http.post("/pins", newPin);
            pin ? setPin([...pin, res.data]) : setPin([res.data])
            console.log(pin)
            setNewPlace(null);
          } catch (e) {
            console.log(`FRONT-END: Error sending newPin to backend ${e}`);
          }
    }
    
    return (
        <div>
            <form onSubmit={createPin}>
                <label >Title:</label>
                <input type="text" placeholder="Enter Title Here" onChange={(e) =>  setTitle(e.target.value)}/>
                <label>Review:</label>
                <textarea name="" id="" placeholder="Leave A Review" onChange={(e) => setDesc(e.target.value)}  />
                <label htmlFor="">Rating:</label>
                <select name="" id="" onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button type="submit">
                    Create Pin
                </button>
            </form>
        </div>
    )
}

export default InputForm

