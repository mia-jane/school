import React from 'react';
// import axios from "axios"

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({ allMemeImgs: memes })
            })
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randomIndex = Math.floor(Math.random() *101)
        const memePicture = this.state.allMemeImgs[randomIndex].url
        this.setState({randomImg: memePicture})
    }
    
    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    /> 
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}







// class MemeGenerator extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             topText: "",
//             bottomText: "",
//             randomImage: "http://i.imgflip.com/1bij.jpg",
//             allMemeImgs: []
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     // componentDidMount() {
//     //     fetch("https://api.imgflip.com/get_memes")
//     //         .then(response => response.json())
//     //         .then(response => {
//     //             const {memes} = response.data
//     //             console.log(memes[0])
//     //             this.setState({ allMemeImgs: memes })
//     //         })
//     // }

//     componentDidMount(){
//         axios.get("https://api.imgflip.com/get_memes")
//         .then((response) => {
//             const {memes} = response.data.data
//             this.setState = ({
//                 allMemeImgs: memes})
//         })
//     }

//     handleChange(event) {
//         const {name, value} = event.target
//         this.setState({ [name]: value })
//     }

//     render(){
//         return (
//             <div>
//                 <form className="meme-form">
//                     <input 
//                         type="text" 
//                         name="topText" 
//                         placeholder="top text"
//                         value={this.state.topText}
//                         onChange={this.handleChange}
//                     />
//                     <input 
//                         type="text" 
//                         name="bottomText" 
//                         placeholder="bottom text" 
//                         value={this.state.bottomText}
//                         onChange={this.handleChange}
//                     />
//                     <button>Generate</button>
//                 </form>
//             </div>
//         );
//     }
// }
    
export default MemeGenerator;