import { useEffect, useState } from "react";
import styles from "./App.module.scss"

export default function SlideShowApp() {
    const [input, setInput] = useState("");
    const [sentences, setSentences] = useState<string[]>([]);

    useEffect(() => {
        setSentences(input.split(". "));
    }, [input])

    return (
        <div className={styles.container}>
            <textarea 
                value={input}
                onChange={(e) => {setInput(e.target.value)}}
            />

            {
                sentences.map((sentence, index) => {
                    return (
                        <div className={styles.sentenceBox} key={index}>
                            <h1 className={styles.sentence}>{ sentence }{ sentence != "" ? "." : null }</h1>
                        </div>
                    )
                })
            }
        </div>
    );
};