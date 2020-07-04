import React from 'react'
import CharacterItem from './CharcterItem'
import Spinner from '../ui/Spinner'

export default function CharacterGrid({ characters, isLoading }) {
    return isLoading ? (<Spinner />) : (
        <section className="cards">
            {characters.length === 0 && "There is no character match with your search"}
            {characters.map(character => (
                <CharacterItem key={character.char_id} character={character} />
            ))}
        </section>
    )
}

