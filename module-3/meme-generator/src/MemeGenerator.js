import React from 'react';

class MemeGenerator extends React.Component {
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        
    }

    render(){
        return (
            <div>
                <h1>The memes</h1>
            </div>
        );
    }
}
    
export default MemeGenerator;