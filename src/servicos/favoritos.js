import axios from "axios";

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos() {
    const response = await favoritosAPI.get('/')

    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    try {
        await favoritosAPI.delete(`/${id}`)
        alert(`Livro ID:${id} removido dos favoritos com sucesso`)
    }
    catch (error) {
        if (error.response) {
            alert(error.response.data.Erro);
            // exibe o erro do backend
        } 
        else {
            
            alert("Ocorreu um erro ao inserir o livro nos favoritos.");
            console.error(error);
        }
    }
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}