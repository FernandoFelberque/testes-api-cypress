/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {});

     it('Deve validar contrato de usuários', () => {
          //TODO: contrado 
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          //TODO:
          cy.request('usuarios').then((response) => {
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          //TODO:  
          let Email = `fulano${Math.floor(Math.random() * 1000)}@gmail.com`
          cy.cadastrarUsuario('Fulanoteste', Email).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')
          })
     });

     it('Deve validar um usuário com email inválido', () => {
          //TODO: 
          cy.cadastrarUsuario('Fulanoteste', 'fulano880@gmail.com').then((response) => {
               expect(response.status).to.equal(400)
               expect(response.body.message).to.equal('Este email já está sendo usado')
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: editar
          let Email = `fulano${Math.floor(Math.random() * 1000)}@gmail.com`
          cy.cadastrarUsuario('Fulanoteste', Email).then(response => {
               let id = response.body._id
               let numerouser = Math.floor(Math.random() * 1000) // para padronizar o numero do email com o nome do usuario
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    body: {
                         "nome": `beltranos${numerouser} da Silva`,
                         "email": `beltranos${numerouser}@qa.com.br`,
                         "password": "teste",
                         "administrador": "true"
                    }
               }).then(response => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
               })
          })

     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: deletar
          let Email = `fulano${Math.floor(Math.random() * 1000)}@gmail.com`
          cy.cadastrarUsuario('Fulanoteste', Email).then(response => {
               let id = response.body._id
               cy.request({
                    method: 'DELETE',
                    url: `usuarios/${id}`,
               }).then(response => {
                    expect(response.status).to.equal(200)
                    expect(response.body.message).to.equal('Registro excluído com sucesso')
               })

          });


     });

