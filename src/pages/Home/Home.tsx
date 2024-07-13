import React, { useEffect, useState } from 'react';
import Cabecalho from '../../components/Cabecalho/Cabecalho';
import { DivColumn, SectionMain } from '../../components/GlobalStyle/GlobalStyle';

const Home: React.FC = () => {

    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem('usuarioNome');
        if (nome) {
            setNomeUsuario(nome);
        }
    }, []);

    return (
        <>
            <Cabecalho/>
            <SectionMain>
                <h2>Seja Bem-vindo, {nomeUsuario}!</h2>
                <DivColumn>

                </DivColumn>
            </SectionMain>
        </>
    );
};

export default Home;
