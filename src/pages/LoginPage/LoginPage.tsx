import Botao from "../../components/Botao/Botao"
import { InputContainer, InputStyle, FormContainer, LinkStyleButton } from "../../components/GlobalStyle/GlobalStyle"
import { CardForm, CardLogin, SectionLogin, TextDiv } from "./LoginPage.styled"

const LoginPage = () => {
    return(
        <>
        <SectionLogin>
            <CardLogin>
                <TextDiv>
                    <h2>BEM VINDO</h2>
                </TextDiv>
                <CardForm>
                    <h2>LOGIN</h2>
                    <FormContainer>
                        
                        <InputContainer>
                            <span>Email</span>
                            <InputStyle type="email" placeholder="Digite seu email..."></InputStyle>
                        </InputContainer>
                        <InputContainer>
                            <span>Senha</span>
                            <InputStyle type="password" placeholder="Digite sua senha..."></InputStyle>
                        </InputContainer>
                    </FormContainer>
                    <Botao path="/Home" width="7vw" height="4.5vh">Entrar</Botao>
                </CardForm>
            </CardLogin>
            <span>Ainda não tem uma conta? Clique <LinkStyleButton to="/Cadastro">AQUI</LinkStyleButton> para se cadastrar</span>
        </SectionLogin>
        </>
    )
}

export default LoginPage