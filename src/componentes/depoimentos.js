import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Depoimentos = () => {
    const [depoimentos, setDepoimentos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para controle de carregamento
    const [error, setError] = useState(null); // Estado para tratamento de erro

    useEffect(() => {
        const fetchDepoimentos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/depoimentos');
                setDepoimentos(response.data);
            } catch (error) {
                console.error("Erro ao buscar depoimentos:", error);
                setError('Erro ao carregar depoimentos.'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchDepoimentos();
    }, []);

    if (loading) {
        return <p>Carregando depoimentos...</p>; 
    }

    return (
        <div className='depoimentosfunc'>
            <h1>Depoimentos</h1>
            {error && <p>{error}</p>} {}
            {depoimentos.length === 0 ? (
                <p>Nenhum depoimento encontrado.</p> 
            ) : (
                <ul>
                    {depoimentos.map(depoimento => (
                        <li key={depoimento.id}>
                            <strong>{depoimento.nome_usuario}</strong> ({depoimento.data}):
                            <p>{depoimento.mensagem}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Depoimentos;