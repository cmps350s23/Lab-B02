'use client'
import React from 'react'
import styles from '../page.module.css'
import Link from 'next/link';

export default function Recipe({ recipe, onDelete }) {

    // This will be used to toggle the instructions [show and hide]
    const [show, setShow] = React.useState(false)
    return (
        <div className={styles.recipeCard}>
            <img src={recipe.image} className={styles.cardImg} />
            <div className={styles.description}>
                <h1>{recipe.name}</h1>
                <h3>{recipe.region}</h3>
                <hr />
                {
                    show && <div className={styles.instructions}>
                        <h2>Instructions for {recipe.id}</h2>
                        <p>{recipe.instructions}
                        </p>
                    </div>
                }
            </div>
            <br />
            <div className={styles.actionBtns}>
                <button className={styles.btnDetail} onClick={() => setShow(!show)}><i className="fas fa-book"> Show Instructions </i></button>
                <Link href={`/recipes/${recipe.id}`}><button className={styles.btnUpdate}> <i className="fas fa-edit">Update</i></button></Link>
                <button className={styles.btnDelete} onClick={e => onDelete(recipe.id)}> <i className="fas fa-trash"> Delete </i></button>
            </div>
        </div>
    )
}
