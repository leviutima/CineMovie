import React, { useEffect, useState } from "react"

const Perfil: React.FC = () => {

    const [nomeUsuario, setNomeUsuario] = useState<string | null>(null);

    useEffect(() => {
        const nome = localStorage.getItem('usuarioNome');
        if (nome) {
            setNomeUsuario(nome);
        }
    }, []);

    return(
        <>
            <h2>PERFIL DE: {nomeUsuario}</h2>
        </>
    )
}

export default Perfil