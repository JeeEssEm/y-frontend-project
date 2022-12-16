import styles from "./styles.module.css";
import FeatherIcon from 'feather-icons-react';
import {Button} from "../../Elements/Button";

export const FeedbackForm = ({setActive}) => {
    const emailPattern = "^[^\\s@]+@([^\\s@.,]+\\.)+[^\\s@.,]{2,}$";

    return (
        <form className={styles.form} onClick={e => e.stopPropagation()}>
            <div className={styles.form__close}>
                <Button type="ghost" onClick={() => setActive(false)}>
                    <FeatherIcon icon="x"/>
                </Button>
            </div>

            <h2>Форма для связи с нами</h2>

            <div className={styles.form__row}>
                <label className={styles.form__text} htmlFor="name">Как вас зовут</label>
                <input type="text" className={styles.form__input} required id="name"/>
            </div>

            <div className={styles.form__row}>
                <label className={styles.form__text} htmlFor="email">Ваш Email</label>
                <input type="email" className={styles.form__input} required id="email" pattern={emailPattern}/>
            </div>

            <label className={styles.form__row}>
                Ваше сообщение
                <textarea className={styles.form__textarea} required></textarea>
            </label>


            <label className={styles.form__agreement}>
                <input type="checkbox" className={styles.form__checkbox} required/>
                Даю согласие на обработку персональных данных
            </label>

            <Button type="dark">Отправить</Button>
        </form>
    )
}



