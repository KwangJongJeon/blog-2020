import React, { Component } from 'react';
import LoginImage from '../images/nav-image.JPG'


class LoginPage extends Component {


    render() {
        return (
            <section className="hero">
                <div className="hero-body right-align">
                    <div className="columns is-centered">
                        <div className="columns is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" className="box">
                                <h2 className="title has-text-centered has-text-primary-dark">LOGIN</h2>
                                <hr/>
                                <div className="field">
                                    <label for="" class="label">Email</label>
                                    <div class="control has-icons-left">
                                        <input type="email" placeholder="Email" className="input" required/>
                                        <span className="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="Password" className="input" required/>
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="filed">
                                    <label for="" className="checkbox">
                                        <input type="checkbox"/>
                                         Remember me
                                    </label>
                                </div>
                                <div className="field">
                                    <button className="button is-success">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoginPage;