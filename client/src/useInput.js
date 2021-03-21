import {useState} from 'react'

export const useInput = (initialValue) => {
    const [state, setState] = useState(initialValue);

    const handleChange = (e) => {
        setState({...state,[e.target.name]:e.target.value})
      };

      
    

    return {
        state,
        setState,
        reset: ()=>setState(initialValue),
        bind: {
            onChange:handleChange,
            className:'input'
        }
    }
}
