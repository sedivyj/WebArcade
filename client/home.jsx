import React, { Component } from 'react'

export default class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className= "home">
                <img class= "bannerOne" src={require('./banner/tetris_banner.png').default}/>
            
            <div class="table">
                <table id="t01">
                    <tr>
                        <td><img class="thumbnail" src={require('./thumbnail/froggerThumbNailjpg.jpg').default}/></td>
                        <td><img class="thumbnail" src={require('./thumbnail/spaceShip.jpg').default}/></td>
                        <td><img class="thumbnail" src={require('./thumbnail/spaceShip.jpg').default}/></td>

                    </tr>
                    <tr>
                        <td><img class="thumbnail" src={require('./thumbnail/swimmyFish.jpg').default}/></td>
                        <td><img class="thumbnail" src={require('./thumbnail/froggerThumbNailjpg.jpg').default}/></td>
                        <td><img class="thumbnail" src={require('./thumbnail/froggerThumbNailjpg.jpg').default}/></td>
                    </tr>

                </table>
            </div>
            </div>

        );

    }
}