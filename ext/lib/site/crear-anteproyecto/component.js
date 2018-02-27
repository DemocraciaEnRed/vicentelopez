import React, { Component } from 'react';
import forumStore from 'lib/stores/forum-store/forum-store'
import ForumTagsSearch from 'lib/admin/admin-topics-form/tag-autocomplete/component'
import Attrs from 'lib/admin/admin-topics-form/attrs/component'

export default class Create extends Component {
    
    constructor (props) {
        super(props)
        this.state = {
            forum: null,
            title: "",
            body: "",
            tags: "",
            topic: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value
        } )
        event.preventDefault();
          }

    componentWillMount () {
        const name = "ante-proyectos"
        forumStore.findOneByName(name)
        .then((forum) =>  {
            this.setState({forum: forum})
        
        })
        
    }

   
    handleSubmit(e) {
        e.preventDefault();
        const formData = { forum: this.state.forum,
                           title: this.state.title,
                           body: this.state.body,
                           tag: "59665fe8724f61003327eb2f" 
                         }
        fetch(('/api/v2/topics/' + forum ) ,{
            method: 'POST',
            credentials: 'include', 
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json'
            }
            
          })
          
    }
   
    render() {
        if(!this.state.forum) return null
       
        return (
          
            <div className="wrapper" >
           <h1 className="text-center">{'Crear anteproyecto' }</h1>
                <form className="form-control" onSubmit={this.handleSubmit}>

                <Attrs forum={this.state.forum} />
                <div >Tags</div >
                <div className="tags-autocomplete">
                <ForumTagsSearch
                    tags={this.topic && this.topic.tags && this.topic.tags}
                    initialTags={this.state.forum.initialTags}
                    forum={this.state.forum.id} />
                 </div >

                <div >
                        <div >  

                            <label className="required" htmlFor=""></label>
                            <div>
                                <input type="hidden"
                                       name="tag"
                                       value={this.state.tag}/>
                            </div>
                        </div>
                        <div >
                            <label className="required" htmlFor=""></label>
                            <div>
                                <input type="hidden"
                                       name="forum"
                                       value={this.state.forum.id}/>
                            </div>
                        </div>

                        <div className='form-group kind-string'>
                            <label className="required" htmlFor="">Título</label>
                            
                                <input  className='form-control'
                                       type="text"
                                       name="title"
                                       value={this.state.title}
                                       onChange={this.handleInputChange}/>

                        </div>
                        <div className='form-group kind-string'>
                            <label className="required" htmlFor="">Cuerpo</label>
                                <textarea className="form-control" rows="6" 
                                       name="body"
                                       value={this.state.body}
                                       onChange={this.handleInputChange}/>

                        </div>
                        
                        <div>
                                <button type="submit"
                                        name="formSend"
                                        onChange={this.handleInputChange}
                                        value={this.formSend}>
                                    Enviar
                                </button>
                        </div>
                    </div>
                                </form>
        
                                </div>
        






        );
    }
}
 