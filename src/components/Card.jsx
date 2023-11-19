import React from 'react'
import { forwardRef } from 'react'
const Card = forwardRef(({ images, content},ref)  => {
    return (
    <section ref={ref} className="card-container hidden">
        <h1>{content.heading}</h1>
        <article className="card">
        {         
                (images.length === 1) ?
                    images.map(
                        (image) => {
                            return (
                                <div key={image.id} className="image-container">
                                    <img src={image.src} alt="" />
                                </div>
                            ) 
                        }
                    ) 
                :
                images.map(
                    (image) => {
                        return (
                            <div key={image.id} className="image-container block">
                                <img src={image.src} alt="" />
                            </div>
                        ) 
                    }
                )
                
            }
        <div className="card-content">
            <p>{content.paragraph}</p>          
        </div>
        </article>
    </section>
  )
});

export default Card