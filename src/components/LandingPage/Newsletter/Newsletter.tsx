import React, { useState } from 'react'
import './Newsletter.scss'
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react'
import { BiRightArrowAlt } from 'react-icons/bi'

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const emailInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const [isError, setIsError] = useState(false);
  const emailSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if(email === '' || !email.includes('@') || !email.includes('.')) {
      setIsError(true);
      alert('Please enter a valid email address!');
      return;
    }
    setIsError(false);
    alert(`Wohoo! You have subscribed to our newsletter with ${email}`);
    setEmail('');
  }
  return (
    <div className='nl-div'>
        <div className='nl-header'>
          <div className='nl-header-txt'>SUBSCRIBE TO OUR NEWSLETTER</div>
          <img className='nl-header-icon' src='/assets/images/newsletter-vector.png' alt='newsletter-vector' />
        </div>
        <form
          onSubmit={emailSubmitHandler}
          className='nl-form'
        >
          <InputGroup className='nl-input-div'>
            <Input placeholder='Your email' isInvalid={isError} value={email} onChange={emailInputHandler} size='lg' variant='filled' errorBorderColor='crimson' className='nl-input' />
            <InputRightElement className='nl-input-btn' children={<BiRightArrowAlt type='submit' onClick={emailSubmitHandler} />} />
          </InputGroup>
        </form>
    </div>
  )
}

export default Newsletter