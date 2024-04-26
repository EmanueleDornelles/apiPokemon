import React, { useEffect, useState } from "react";
import PokemonService from "../../services/PokemonService";
import { PokemonListInterface } from "../../types/AppInterfaces";

const PokemonList: React.FC = ()=>{

    const[pagina,setPagina]= useState<number>(1);
    const[itensPorPagina,setItensPorPagina]=useState<number>(20);
    const [pokemonItens,setPokemonItens]=useState<PokemonListInterface[]>([]);

    const handleListarDados= async()=>{
        const responseData: PokemonListInterface= await PokemonService.listarPokemons({
            itensPorPagina: itensPorPagina, 
            pagina: pagina
        });
        if (responseData.results.length>0) {
            
        }
    }
    useEffect(()=>{
        handleListarDados
    },[handleListarDados]);
    
    return(
        <React.Fragment></React.Fragment>
    )
}

export default PokemonList;