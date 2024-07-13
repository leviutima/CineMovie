import { ContainerForm, FormContainer, ImgContainer, InputContainer, InputStyle, SectionContainer } from "../../components/GlobalStyle/GlobalStyle"
import userCadastro from '../../assets/images/cadastroImage.png'
import Botao from "../../components/Botao/Botao"
import { ContainerCadastro } from "./Cadastro.styled"

const CadastroPage = () => {
    return(
        <>
        <SectionContainer>
            <ImgContainer>
                <img src={userCadastro}></img>
            </ImgContainer>
            <FormContainer>
                <ContainerCadastro>
                    <ContainerForm>
                        <InputContainer>
                        <span>Nome:</span>
                        <InputStyle type="text" placeholder="Digite seu nome..."></InputStyle>
                    </InputContainer>

                    <InputContainer>
                        <span>Email:</span>
                        <InputStyle type="email" placeholder="Digite seu email..."></InputStyle>
                    </InputContainer>

                    <InputContainer>
                        <span>Senha:</span>
                        <InputStyle type="password" placeholder="Digite sua senha..."></InputStyle>
                    </InputContainer>

                    <InputContainer>
                        <span>Confirme sua senha:</span>
                        <InputStyle type="password" placeholder="Confirme sua senha..."></InputStyle>
                    </InputContainer>
                    </ContainerForm>
                    <Botao path="/" width="8vw">Cadastrar</Botao>
                </ContainerCadastro>
            </FormContainer>
        </SectionContainer>
        </>
    )
}

export default CadastroPage