import React, {Component} from 'react'

// eslint-disable-next-line no-unused-vars
import config, {storage} from './../firebase-config'

class adminPortfolio extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)

        this.state = {
            estaGravando:false
        }

        this.gravaPortfolio = this.gravaPortfolio.bind(this)
    }

    gravaPortfolio(e){
        const itemPortfolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem
        }
        this.setState({estaGravando:true})
        const arquivo = itemPortfolio.imagem.files[0]
        const {name, size, type} = arquivo
        console.log(name, size, type)

        const ref = storage.ref(name)
        ref.put(arquivo)
        .then(img => {
            img.ref.getDownloadURL()
            .then(downloadURL => {
                
                const novoPortifolio = {
                    titulo: itemPortfolio.titulo,
                    descricao: itemPortfolio.descricao,
                    imagem: downloadURL
                }

                config.push('portfolio', {
                    data: novoPortifolio
                })
                this.setState({estaGravando:false})
                })
            
        })

        e.preventDefault()

    }



    render(){

        if(this.state.estaGravando){
            return(
                <div className="container">
                    <p><span className="glyphicon glyphicon-refresh" />aguarde ...</p>
                </div>
            )
        }

        return(
            
            <div className="container-fluid" style={{ marginTop: -80 }}>

            <h2 className="text-center">Portfólio Área Administrativa</h2>

                <form onSubmit={this.gravaPortfolio}>
    <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input type="text" className="form-control" id="titulo" placeholder="Título" ref={(ref) => this.titulo = ref}/>
        
    </div>
    <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
    </div>

    <div className="form-group">
    <label htmlFor="imagem">Imagem</label>
    <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref}/>
  </div>
    
    <button type="submit" className="btn btn-primary">Salvar</button>
    </form>

            </div>

            
        )
    }
       
}

export default adminPortfolio

