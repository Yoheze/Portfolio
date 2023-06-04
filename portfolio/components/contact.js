import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import GoogleIcon from '@/public/google.png'
import { signIn, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react'

export default function Contact () {

    const { data: session, status } = useSession();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (status === 'authenticated') {
            try {
            const response = fetch('/api/submitform', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: session.user.name, email: session.user.email, message: 'OAuth login' }),
              });
              console.log(result.message)
              setErrorMessage('form sent successfully')
            }
            catch {
                setErrorMessage('OAuth Login successful!');
            }
        }
    }, [status, session]);

    // Validation functions
    const validateName = (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    };

    const validateEmail = (email) => {
        const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;
        return regex.test(email);
    };

    const validateMessage = (message) => {
        const maxLength = 500;
        const regex = /^[\w\s.,!?]+$/;
        return message.length >= 0 || regex.test(message) &&  message.length <= maxLength;
    };
  
    const handleSubmit = async (e=0) => {

        console.log(name, email, message)

        if (e) e.preventDefault();
    //   Validate the input fields before sending the data
        if (!validateName(name)) {
            setErrorMessage('Invalid name. Please only use letters and spaces.');
            return;
        }
  
      if (!validateEmail(email)) {
        setErrorMessage('Invalid email address. Please enter a valid email address.');
        return;
      }
  
      if (!validateMessage(message)) {
        setErrorMessage('Invalid message. Please remove any special characters and ensure the message is under 500 characters.');
        return;
      }
  
      try {
        const response = await fetch('/api/submitform', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });
  
        const result = await response.json();
  
        if (result.success) {
          setErrorMessage('form sent successfully');
          setName('');
          setEmail('');
          setMessage('')
        } else {
          setErrorMessage('Error adding item: ' + result.message);
        }
      } catch (error) {
        setErrorMessage('Error adding item: ' + error.message);
      }
    };

    const check =  errorMessage==='form sent successfully' || errorMessage==='OAuth Login successful!' ? <p style={{color: 'lightgreen'}}>{errorMessage}</p> : <p style={{color: 'red'}}>{errorMessage}</p>

    const messageLimit = message.length>500 ? <p style={{color: 'red'}}>{message.length}/500</p> : <p>{message.length}/500</p>

    return (
        <div className={styles.contact} id='contact'>
            <h2>Contact me!</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.input_group} style={{paddingTop: '30px'}}>
                <input onChange={(e) => setName(e.target.value)} required></input><label className={styles.user_label}>Name: </label>
              </div>
              <div className={styles.input_group}>
                <input onChange={(e) => setEmail(e.target.value)} required></input><label className={styles.user_label}>Email: </label>
              </div>
                <div className={styles.textarea}>
                    <label>Send me a message!: </label><textarea rows="5" cols="75" onChange={(e) => setMessage(e.target.value)} placeholder="Any message you want to send, limited to 500 letters"></textarea>
                    {messageLimit}
                </div>
                <button type='submit' style={{color: 'white'}}>Submit!</button>
                {check}
                <p>Click these buttons below if you want to quickly send me your name and email!</p>
                <div className={styles.OAuth}>
                    <button onClick={() => signIn('google')}>
                        <p>Sign in with Google</p>
                        <Image src={GoogleIcon} alt='google icon' width={20} height={20}/></button>
                    <button onClick={() => signIn('github')}>
                        <p>Sign in with Github</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fillRule="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}


export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    return {
      props: {
        session,
      },
    };
}