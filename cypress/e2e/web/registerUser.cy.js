// import { gerarEmail } from "../../support/utils";
// import CommomPage from "../../support/pages/commonPage";
// import RegisterPage from "../../support/pages/registerPage";

// const register = new RegisterPage();
// const commom = new CommomPage();


// describe('Registro de usuário', () => {
//   const email = gerarEmail();

//   beforeEach(() => {
//     commom.accessPage('cadastrarusuarios')
//   })
 
//   it('Dados válidos', () => {
//     register.fillInRegister('Alfredo', email, Cypress.env('PASSWORD'))
//     register.verifyMessage('Cadastro realizado com sucesso')
//   })

//   it('Nome vazio', () => {
//     register.fillInRegister('', email, Cypress.env('PASSWORD'))
//     register.verifyMessage('Nome é obrigatório')
//   })

//   it('Email vazio', () => {
//     register.fillInRegister('Alfredo', '', Cypress.env('PASSWORD'))
//     register.verifyMessage('Email é obrigatório')
//   })

//   it('Password vazio', () => {
//     register.fillInRegister('Alfredo', email, '')
//     register.verifyMessage('Password é obrigatório')
//   })

//   it('Todos os campos vazios', () => {
//     register.fillInRegister('', '', '')
//     register.verifyMessages(['Nome é obrigatório', 'Email é obrigatório', 'Password é obrigatório'])
//   })
// })