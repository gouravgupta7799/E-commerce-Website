import React, { useRef } from 'react';
import classes from './ContactUS.module.css'
const url = 'https://fetchapiproject-1ef23-default-rtdb.firebaseio.com/movies.json'
function ContectUS(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const contactNumberRef = useRef('');

  async function submitHandler(event) {
    event.preventDefault();

    // could add validation here...
    try {
      const information = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        contactNumber: contactNumberRef.current.value,
      };

      const info = await fetch(url,
        {
          method: 'POST',
          body: JSON.stringify(information)
        },
        {
          Headers: {
            'content-type': 'application/Json'
          }
        })
      console.log(info)
    }
    catch (err) {
      console.log(err.message)
    }

    nameRef.current.value = ''
    emailRef.current.value = ''
    contactNumberRef.current.value = ''
  }

  return (
    <form className={classes.container} onSubmit={submitHandler}>
      <h1>Contact US</h1>
      <div className={classes.control}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' ref={emailRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='contactNumber'>contactNumber</label>
        <input type='text' id='contactNumber' ref={contactNumberRef} />
      </div>
      <button>ContactUs</button>
    </form>
  );
}

export default ContectUS;
