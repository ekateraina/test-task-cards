import {useContext, useRef} from 'react'
import context from '../../context'
import styles from './Filter.module.scss'

function Filter(){

    const {cards, setFilteredCards} = useContext(context)
    
    const input = useRef()
    
    const inputHandler = () => {
        console.log(input.current.value)
        if(input.current.value.length > 3){
          setFilteredCards(cards.filter(card=>card.title.toLowerCase().startsWith(input.current.value.toLowerCase()))) 
        }else{
            setFilteredCards(null)
        }
    }

    return(
<div className={styles.filter}>
    <label htmlFor='filter-input'>Filter</label>
    <input type="text" id='filter-input' ref={input} onChange={inputHandler}/>
</div>
    )
}

export default Filter