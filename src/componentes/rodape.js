import React from 'react'

const Rodape = props => {
    return (
        <footer className = 'container-fluid text-center' >
            <a href='#cabecalho' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado no curso do Reginaldo Santos da <a href='https://www.udemy.com/course/xumes-react-criando-site-para-empresa' title='Criando Site para Empresa com ReactJs' 
            target='_blank' rel="noopener noreferrer">(Udemy)</a> por <a href='http://www.gilsonleite.com' title='Gilson Leite' 
            target='_blank' rel="noopener noreferrer">www.gilsonleite.com</a></p> 
            <p>template Bootstrap Theme Made By <a href='https://www.w3schools.com/bootstrap/tryit.asp?filename=trybs_theme_company_complete_animation' title='Visit w3schools' target='_blank' rel="noopener noreferrer">www.w3schools.com</a></p>
</footer>
)
}

export default Rodape