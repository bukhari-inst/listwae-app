import React, { useState } from 'react';
import Hero from 'parts/HeroSignup';
import Button from 'elements/Button';
import Fade from 'react-reveal/Fade';
import { auth, db } from 'config/Firebase';

export const SignupPage = (props) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const [registerationError, setRegisterationError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection('users')
          .doc(cred.user.uid)
          .set({
            Name: fullName,
            Email: email,
            Phone: phone,
            Password: password,
          })
          .then(() => {
            setFullName('');
            setEmail('');
            setPassword('');
            setRegisterationError('');
            props.history.push('/login');
          })
          .catch((err) => setRegisterationError(err.message));
      })
      .catch((err) => setRegisterationError(err.message));
  };

  return (
    <Fade top delay={300}>
      <div>
        <div className="row d-flex justify-content-center">
          <div className="col bg-primary">
            <Fade bottom delay={500}>
              <Hero />
            </Fade>
          </div>

          <div className="col bg-white d-flex justify-content-center">
            <Fade bottom delay={500}>
              <div className="container ml-5">
                <div style={{ marginTop: 150 }}>
                  <h1 className="text-gray-800 font-weight-light">
                    Daftarkan Akun Anda
                  </h1>
                </div>
                <div>
                  <h3 className="text-gray-600 font-weight-normal my-3">
                    Silahkan Isi Form Pendaftaran Untuk Masuk Ke Akun Anda
                  </h3>
                </div>
                <form onSubmit={handleRegister}>
                  <div className="form-group">
                    <label for="Name">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Nama Lengkap
                      </h3>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setFullName(e.target.value)}
                      value={fullName}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Alamat Email
                      </h3>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label for="Name">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Nomor Telephone
                      </h3>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      <h3 className="text-gray-800 font-weight-lighter ">
                        Kata Sandi
                      </h3>
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Please type here..."
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn"
                    isPrimary
                    style={{
                      width: 420,
                      height: 45,
                      marginTop: 16,
                      marginBottom: 15,
                    }}
                  >
                    Daftar
                  </Button>
                  <div
                    className="text-center h3 font-weight-lighter"
                    style={{ width: 420 }}
                  >
                    Sudah mempunyai akun?
                    <Button
                      href="/login"
                      type="link"
                      className="font-weight-normal"
                    >
                      {' '}
                      Masuk
                    </Button>
                  </div>
                </form>
                {registerationError && (
                  <div className="error-msg">{registerationError}</div>
                )}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
};
