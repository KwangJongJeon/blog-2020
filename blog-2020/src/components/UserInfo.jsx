import React, { Component } from 'react';
import photo from '../images/1280x960.png';
import smallPhoto from '../images/96x96.png';


class UserInfo extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={photo} alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure className="image is-48x48">
                                <img src= {smallPhoto} alt="Placeholder image"/>
                            </figure>
                        </div>
                        <div class="media-content">
                            <p className="title is-4">KJ Jeon</p>
                            <p className="subtitle is-6">@jeon</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris.
                        <br/>
                        <a href="#">#css</a> <a href="#">#react</a> <a href="#">#MERN</a>
                        <br/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;