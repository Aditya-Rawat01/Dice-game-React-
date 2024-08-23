import { useState } from 'react'
import React from 'react'
import styles from './Gamestart.module.css'
export function Gamestart() {
    const [Image,setImage]=useState('../../../dice1.png')
    const [Num,setNum]=useState()
    const [Score,setScore]=useState(0)
    const [Showrules,setShowrules]=useState(false)
    function imagerender() {
        if (!Num) {
            alert("Select a number first")
            return;
        }
        const arr=['../../../dice1.png',
            '../../../dice2.png',
            '../../../dice3.png',
            '../../../dice4.png',
            '../../../dice5.png',
            '../../../dice6.png']
      const mathrand=Math.floor((Math.random()*6))
      if (Num==mathrand+1) {
        setScore((prev)=>prev+Num)
      } else {
        setScore((prev)=>prev-1)
      }
        console.log(Num)
        console.log(mathrand+1)
        setImage(arr[mathrand])
        setNum(undefined);
    }
    function Render() {
        setShowrules((prev)=>!prev)
    }
    return (
    <div className={styles.container}>
        <div className={styles.title}>
            <div className={styles.score}>
                <p className={styles.number}>{Score}</p>
                <p className={styles.text}>Total Score</p>
            </div>
            <div className={styles.choice}>
                <div className={styles.nums}>
                <Values setNum={setNum} val={1}/>
                <Values setNum={setNum} val={2}/>
                <Values setNum={setNum} val={3}/>
                <Values setNum={setNum} val={4}/>
                <Values setNum={setNum} val={5}/>
                <Values setNum={setNum} val={6}/>
                </div>
                <div className={styles.para}>
                <p>Select Number</p></div>
            </div>
        </div>
        <div className={styles.hero}>
            <div className={styles.dice}>
            <img onClick={imagerender} src={Image} />
            </div>
            <div className={styles.rules}>
                <button onClick={()=>setScore(0)} className={`${styles.btn} ${styles.white}`}>Reset Score</button>
                <button onClick={Render}className={styles.btn}>Show Rules</button>
                
            </div>
            {Showrules?<Rules/>:null}    
        </div>
        
    </div>
    )
}
function Rules() {
    return (<div className={styles.showrules}>
        <div className={styles.p}>
            <h3>How to play dice game :</h3>
            <p>Select on any number</p>
            <p>Click on dice image</p>
            <p>After clicking on dice if selected number is equal to dice number you will get same point as dice</p>
            <p>If you guess wrong then 1 point will be deducted (Gambling hehe)</p> 
        </div>
    </div>)
}

let Values=React.memo(function Values({val,setNum}) {
    function valuepasser() {
        setNum(val)
    }
    return (
        <button onClick={()=>valuepasser()} className={styles.val}>
            {val}
        </button>
    )
})
{/* 
    
    what i think right now: (done)
    random num generator  ko pass krna padega child me \\\\\\\\\ problem: default value bhi pass ho ri 
    score ka state aur setstate bhi bhejna padega child me pir comparison krke points upr niche kr skte
    
    
    what left: show rules ka component bnaana h
    
    */}