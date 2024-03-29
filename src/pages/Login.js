import React, {Fragment} from 'react';
import '../'
const Login = () => {
  return (
    <Fragment>
        <body>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form class="sign-in-form" action="index.html">
                            <img src="img/main_logo.png" class="image" alt="GoHackathon Logo" />
                            <br/>

                            <h2 class="title">SIGN IN</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            
                            <input type="submit" value="Login" class="btn solid" />
                            <p class="social-text">Or Sign in with social platforms</p>
                            
                            <div class="social-media">
                                <a href="https://www.facebook.com/login/" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://myaccount.google.com/" class="social-icon"><i class="fab fa-google"></i></a>
                                <a href="https://github.com/login" class="social-icon"><i class="fab fa-github"></i></a>
                            </div>
                        </form>
                        
                        <form  class="sign-up-form" action="index.html">
                            <img src="img/main_logo.png" class="image" alt="Logo" />
                            <br/>
                            
                            <h2 class="title">SIGN UP</h2>
                            
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            
                            <input type="submit" class="btn" value="Sign up" />
                            
                            <p class="social-text">Or Sign up via</p>
                            
                            <div class="social-media">
                                <a href="https://www.facebook.com/login/" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/i/flow/login" class="social-icon"><i class="fab fa-twitter"></i></a>
                                <a href="https://myaccount.google.com/" class="social-icon"><i class="fab fa-google"></i></a>
                                <a href="https://www.linkedin.com/login" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://github.com/login" class="social-icon"><i class="fab fa-github"></i></a>
                            </div>
                        </form>
                    </div>
                </div>
                
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="content">
                            <h3>New here ?</h3>

                            <p>Hey There!<br/>
                            Grab the opportunity to enter your dream world in Tech.<br/>
                            Now, what you waiting for?
                            Let's Go!
                            </p>
                            
                            <button class="btn transparent" id="sign-up-btn">Sign up</button>
            
                        </div>
                        <img src="img/log.svg" class="image" alt="Logo" />
                    </div>
                    
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            
                            <p>We have been waiting for you.<br/>
                            Continue with us from where you have left.
                            </p>
                            
                            <button class="btn transparent" id="sign-in-btn">Sign in</button>
                        </div>
                        <img src="img/register.svg" class="image" alt="Registration Logo" />
                    </div>
                </div>

            </div>
        </body>

    </Fragment>
  )
}

export default Login
