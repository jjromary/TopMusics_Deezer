import { useContext } from 'react'
import { TracksContext } from '../../Context/TracksContext'
import { SearchContainer } from './styles'

export function SearchForm() {
	const { search, setSearch } = useContext(TracksContext)

	return (
		<SearchContainer>
			<input
				type='text'
				placeholder="Busque por Artista, Álbum ou Música"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
		</SearchContainer>
	)
}