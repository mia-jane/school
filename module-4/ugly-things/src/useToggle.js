import {useState} from 'react'

function useToggle() {
    const [isToggledOn, setIsToggledOn] = useState(false)
    function toggle(){
        setIsToggledOn(prev => !prev)
    }
    return [isToggledOn, toggle]
}

export default useToggle;