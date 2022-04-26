import React, { useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import { IoLocationSharp } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

// const mainColor = '#13113c';

const ContactContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/Bg1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ContactWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem;
  padding: 1rem;

  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;

  & > * {
    margin-bottom: 1rem;
  }
`;

const FormLabel = styled.label`
  font-size: 20px;
  width: 100%;
  color: #000;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-bottom: 3px solid #000;
  background: transparent;
  box-sizing: border-box;
  color: #000;
  margin-bottom: 2rem;
  &[type='date'] {
    color: rgba(0, 0, 0, 0.5);
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const FormTextArea = styled.textarea`
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */
  border: none;
  border-bottom: 3px solid #000; /* Gray border */
  background: transparent;
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  color: #000;
  font-size: 18px;
`;

const FormButtonArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormButton = styled.button`
  width: fit-content;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  transition: all 1s ease-in-out;
  color: #fff;
  border-radius: 16px;
  font-weight: 600;
  background: ${({ lightBg }) => (lightBg ? '#214222' : '#f5b315')};
  padding: ${({ bigButton }) => (bigButton ? '14px 48px' : '12px 30px')};
  font-size: ${({ bigFont }) => (bigFont ? '20px' : '16px')};
`;

const LocationArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  & > .icon {
    font-size: 4rem;
  }
`;

const pageTitle = 'Contactati-ne :)';

function ContactPage() {
  const form = useRef();
  const submitHandlerCt = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_Cerebrium',
        'contact_ct',
        form.current,
        'TOG1_9xw0nZIs7jB7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.getElementById('formCt').reset();
  };
  const submitHandlerTl = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_Cerebrium',
        'contact_tl',
        form.current,
        'TOG1_9xw0nZIs7jB7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    document.getElementById('formTl').reset();
  };
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <ContactContainer>
        <ContactWrapper>
          {/* contact constanta */}
          <FormWrapper>
            <LocationArea>
              <p className="icon">
                <IoLocationSharp />
              </p>
              <div>
                <h2>Constanta</h2>
                <h3>Adresa:</h3>
                <p>
                  Bvd Al. Lăpușneanu, Nr. 94, <br />
                  Bl. LE42, Sc. C, Ap. 42, Parter
                </p>
              </div>
            </LocationArea>
            <ContactForm
              ref={form}
              id="formCt"
              onSubmit={() => submitHandlerCt()}
            >
              <FormLabel htmlFor="name">Nume:</FormLabel>
              <FormInput
                type="text"
                name="nameC"
                required
                placeholder="Numele si prenumele"
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput
                type="email"
                name="emailC"
                required
                placeholder="Email-ul dumneavoastră"
              />

              <FormLabel>Alege-ti o data: </FormLabel>
              <FormInput type="date" name="dateC" />

              <FormLabel htmlFor="message">Mesaj:</FormLabel>
              <FormTextArea cols="30" rows="5" name="messageC" required />
              <FormButtonArea>
                <FormButton
                  lightBg={true}
                  bigButton={true}
                  bigFont={false}
                  type="submit"
                >
                  Trimite mesaj
                </FormButton>
              </FormButtonArea>
            </ContactForm>
          </FormWrapper>

          {/* contact tulcea */}
          <FormWrapper>
            <LocationArea>
              <p className="icon">
                <IoLocationSharp />
              </p>
              <div>
                <h2>Tulcea</h2>
                <h3>Adresa:</h3>
                <p>
                  Str. Isaccei, Nr. 31 <br />
                  Bl. 18, Sc. A, Ap. 6 - Parter
                </p>
              </div>
            </LocationArea>
            <ContactForm
              ref={form}
              id="formTl"
              onSubmit={() => submitHandlerTl()}
            >
              <FormLabel htmlFor="name">Nume:</FormLabel>
              <FormInput
                type="text"
                name="nameT"
                required
                placeholder="Numele si prenumele"
              />
              <FormLabel htmlFor="email">Email:</FormLabel>
              <FormInput
                type="email"
                name="emailT"
                required
                placeholder="Email-ul dumneavoastră"
              />

              <FormLabel>Alege-ti o data: </FormLabel>
              <FormInput type="date" name="dateC" />

              <FormLabel htmlFor="message">Mesaj:</FormLabel>
              <FormTextArea cols="30" rows="5" name="messageT" required />
              <FormButtonArea>
                <FormButton
                  lightBg={true}
                  bigButton={true}
                  bigFont={false}
                  type="submit"
                >
                  Trimite mesaj
                </FormButton>
              </FormButtonArea>
            </ContactForm>
          </FormWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
}

export default ContactPage;
