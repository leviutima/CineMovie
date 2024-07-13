import React, { useState, FormEvent } from 'react';
import { ContainerForm, FormContainer, ImgContainer, InputContainer, InputStyle, SectionContainer } from "../../components/GlobalStyle/GlobalStyle";
import userCadastro from '../../assets/images/cadastroImage.png';
import { ContainerCadastro } from "./Cadastro.styled";
import { createUsuario } from '../../Services/UsuarioService'; // importando o serviço
import Botao from '../../components/Botao/Botao';

export interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

const CadastroPage: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');
    const [confirmaSenha, setConfirmaSenha] = useState<string>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Formulário enviado');

        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem');
            return;
        }

        const usuario: Usuario = { nome, email, senha };

        try {
            await createUsuario(usuario);
            alert('Usuário cadastrado com sucesso!');
            // Redirecionar ou limpar o formulário
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            } else {
                alert('Erro desconhecido');
            }
        }
    };

    return (
        <SectionContainer>
            <ImgContainer>
                <img src={userCadastro} alt="Cadastro" />
            </ImgContainer>
            <FormContainer>
                <ContainerCadastro>
                    <form onSubmit={handleSubmit}>
                        <ContainerForm>
                            <InputContainer>
                                <span>Nome:</span>
                                <InputStyle 
                                    type="text" 
                                    placeholder="Digite seu nome..." 
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </InputContainer>

                            <InputContainer>
                                <span>Email:</span>
                                <InputStyle 
                                    type="email" 
                                    placeholder="Digite seu email..." 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </InputContainer>

                            <InputContainer>
                                <span>Senha:</span>
                                <InputStyle 
                                    type="password" 
                                    placeholder="Digite sua senha..." 
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </InputContainer>

                            <InputContainer>
                                <span>Confirme sua senha:</span>
                                <InputStyle 
                                    type="password" 
                                    placeholder="Confirme sua senha..." 
                                    value={confirmaSenha}
                                    onChange={(e) => setConfirmaSenha(e.target.value)}
                                />
                            </InputContainer>

                            <Botao type="submit">Cadastrar</Botao>
                        </ContainerForm>
                    </form>
                </ContainerCadastro>
            </FormContainer>
        </SectionContainer>
    );
};

export default CadastroPage;
