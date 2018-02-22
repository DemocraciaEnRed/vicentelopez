import React, { Component } from 'react';
import forumStore from 'lib/stores/forum-store/forum-store'


export default class Create extends Component {
    constructor (props) {
        super(props)
        this.state = {
            forum: "",
            title: "",
            body: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        console.log(value)
        console.log(name)
        this.setState({
          [name]: value
        }, ()=> console.log(this.state))
        event.preventDefault();
        console.log("holi")
          }

    componentWillMount () {
        const name = "florida-este"
        forumStore.findOneByName(name)
        .then((forum) =>  {
        this.setState({
        'forum' : forum.id
        })
        })
    }

   
    handleSubmit(e) {
        e.preventDefault();
        const formData = { forum: this.state.forum,
                           title: this.state.title,
                           body: this.state.body 
                         }
        console.log(formData)                 
        fetch(('/api/v2/topics/' ) ,{
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
            
          })
    }






    render() {
        return (

            
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <div >
                            <label className="col-sm-2 control-label required" htmlFor=""></label>
                            <div className="col-sm-10">
                                <input type="hidden"
                                       name="forum"
                                       value={this.state.forum}/>
                            </div>
                        </div>

                        <div >
                            <label className="col-sm-2 control-label required" htmlFor="">Título</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       name="title"
                                       value={this.state.formTitle}
                                       onChange={this.handleInputChange}/>

                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label required" htmlFor="">Cuerpo</label>
                            <div className="col-sm-10">
                                <input type="text"
                                       name="body"
                                       value={this.state.formTitle}
                                       onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10">
                                <button type="submit"
                                        name="formSend"
                                        onChange={this.handleInputChange}
                                        value={this.state.formTitle}>
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
        );
    }
}
 