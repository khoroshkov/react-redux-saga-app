import React from "react";
import styles from "./post.module.css"

export default ({post}) => {
  return(
    <div className={styles.box}>
    <div className={styles.content}>
      <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  )
}