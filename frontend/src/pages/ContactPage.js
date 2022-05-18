import React, { useRef } from 'react';
import PageHeader from '../components/PageHeader';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

// const mainColor = '#13113c';

const ContactContainer = styled.div`
  min-height: 800px;
  width: 100%;
  padding: 3% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  background-image: url('/images/Bg1.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  & > span {
    z-index: 3;
    color: #fff;
    opacity: 1;
    font-size: 1.3rem;
    @media screen {
      text-align: center;
    }
  }
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 100%);
    z-index: 2;
  }
`;

const ContactWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  z-index: 3;
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

const ContactArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  .social {
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 3rem;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .telefon {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

  .contactData {
    & > * {
      margin-bottom: 0.8rem;
    }
    @media screen and (max-width: 600px) {
      & > div > .smallText {
        width: 200px;
        height: 50px;
      }
    }
  }

  & > .icon {
    font-size: 4rem;
  }
`;

const pageTitle = [
  <p className="contactTitle">
    Pentru programarea unei ședințe ne poți contacta mai jos{' '}
  </p>,
];

function ContactPage() {
  const formCt = useRef();
  const formTl = useRef();

  const sendEmailCt = (e) => {
    e.preventDefault();
    console.log('email sent');
    emailjs
      .sendForm(
        'service_cr_ct',
        'template_ujieozv',
        formCt.current,
        'TOG1_9xw0nZIs7jB7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    document.getElementById('formCt').reset();
  };
  const submitHandlerTl = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_cr_tl',
        'template_rnpl1bf',
        formTl.current,
        'TOG1_9xw0nZIs7jB7'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );
    document.getElementById('formTl').reset();
  };
  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <ContactContainer>
        <span>* ședințele se pot desfășura atât online cât și la cabinet</span>
        <ContactWrapper>
          {/* contact constanta */}
          <FormWrapper>
            <ContactArea>
              <div className="social">
                <a
                  className="icon"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noreferrer"
                  href="https://www.facebook.com/Neurofeedback-Constanta-Cerebrium-102789452359176"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a
                  className="icon"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                  href="https://www.instagram.com/cerebrium_neurofeedback/"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
              <div className="contactData">
                <div>
                  <h2>Constanța</h2>
                  <p className="smallText">Cabinet individual de psihologie</p>
                </div>

                <div>
                  <h3>Adresa:</h3>
                  <p>
                    Bvd Al. Lăpușneanu, Nr. 94, <br />
                    Bl. LE42, Sc. C, Ap. 42, Parter
                  </p>
                </div>

                <div>
                  <h3>Telefon:</h3>
                  <p>
                    <a className="telefon" href="tel:+40742323753">
                      +40740 323 753
                    </a>
                  </p>
                </div>
              </div>
            </ContactArea>
            <ContactForm ref={formCt} id="formCt" onSubmit={sendEmailCt}>
              <FormLabel htmlFor="name">Nume: *</FormLabel>
              <FormInput
                type="text"
                name="nameC"
                required
                placeholder="Numele si prenumele"
              />
              <FormLabel htmlFor="email">Email: *</FormLabel>
              <FormInput
                type="email"
                name="emailC"
                required
                placeholder="Email-ul dumneavoastră"
              />

              <FormLabel>Numărul de telefon: </FormLabel>
              <FormInput type="number" name="dateC" />

              <FormLabel htmlFor="message">Mesaj: *</FormLabel>
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
            <ContactArea>
              <div className="social">
                <a
                  className="icon"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noreferrer"
                  href="https://www.facebook.com/Neurofeedback-Tulcea-100600829272771/"
                >
                  <i className="ri-facebook-circle-line"></i>
                </a>
                <a
                  className="icon"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                  href="https://www.instagram.com/cerebrium_neurofeedback/"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </div>
              <div className="contactData">
                <div>
                  <h2>Tulcea</h2>
                  <p className="smallText">
                    Cabinet individual de psihologie CARP IONELA
                  </p>
                </div>

                <div>
                  <h3>Adresa:</h3>
                  <p>
                    Str. Isaccei, Nr. 31 <br />
                    Bl. 18, Sc. A, Ap. 6 - Parter
                  </p>
                </div>

                <div>
                  <h3>Telefon:</h3>
                  <p>
                    <a className="telefon" href="tel:+40752028775">
                      +40752 028 775
                    </a>
                  </p>
                </div>
              </div>
            </ContactArea>
            <ContactForm ref={formTl} id="formTl" onSubmit={submitHandlerTl}>
              <FormLabel htmlFor="name">Nume: *</FormLabel>
              <FormInput
                type="text"
                name="nameT"
                required
                placeholder="Numele si prenumele"
              />
              <FormLabel htmlFor="email">Email: *</FormLabel>
              <FormInput
                type="email"
                name="emailT"
                required
                placeholder="Email-ul dumneavoastră"
              />

              <FormLabel>Numărul de telefon: </FormLabel>
              <FormInput type="number" name="dateT" />

              <FormLabel htmlFor="message">Mesaj: *</FormLabel>
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
