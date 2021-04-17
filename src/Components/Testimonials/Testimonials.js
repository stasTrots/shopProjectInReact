
import React, { useState } from 'react'

export const Testimonials = () => {

    const arrTestimonials = [
        {
            name:"Tola" , text:"Купил консоль чуть больше недели назад, пришла через пару дней, пользуюсь ею уже неделю, и вот все плюсы и минусы что я обнаружил за эту неделю активного пользования."
        },
        {
            name:"Kola" , text:"Покупал только изза оплаты частями, если б не она за такую цену никогда б не купил, прошивка попалась 8.03 ( некоторые писали что попадалась 7.00, наверное в старой партии, "
        }
    ]
    
    const [testimonials,setTestimonials] = useState(arrTestimonials)

    const [newTestimonials,setNewTestimonials] = useState({
        name:"",
        text:""
    })

    const handleNameChange = (e) => (
        setNewTestimonials(value => ({
            ...value,
            name:e.target.value
        }))
    )

    const handleTextChange = (e) => (
        setNewTestimonials(value => ({
            ...value,
            text:e.target.value
        }))
    )

    const onSend = (e) => {
        e.preventDefault();
        setNewTestimonials({
            name:"",
            text:""
        })
        setTestimonials(value=>{
            return [...value,newTestimonials]
        })
    }
    return (
        <>
            <h2 className="page-title">Testimonials</h2>

            {
                testimonials.map((item,i) => (
                    <div style={
                        {
                            background:"rgba(255,255,255,0.76)",
                            padding:'10px'
                        }
                    } key={i}>
                        <div style={{ marginBottom:"15px" }}>Name:{item.name}</div>
                        <div style={{ marginBottom:"15px" }}>Message:{item.text}</div>
                    </div>
                ))
            }
            <hr style={{
                margin:"25px 0px"
            }}/>
            <form onSubmit={onSend}>
                <div>
                    <input type="text" placeholder="Your name" 
                    value={newTestimonials.name}
                    onChange={handleNameChange}/>
                </div>
                <div>
                    <textarea placeholder="Your text" 
                    rows={10} cols={120}
                    value={newTestimonials.text}
                    onChange={handleTextChange}/>
                </div>
                <button>Leave a comment</button>
            </form>

        </>
    )
}