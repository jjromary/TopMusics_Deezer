import { useContext } from 'react'
import { SearchContext } from '../../Context/SearchContext'
import { SearchContainer } from './styles'

export function SearchForm() {

	const { search, setSearch, loadFetchTrack } = useContext(SearchContext)

	return (
		<SearchContainer onSubmit={loadFetchTrack}>
			<input
				type='search'
				placeholder="Pesquise informando nome do Artista, Música ou Álbum"
				value={search}
				onChange={(event) => setSearch(event.target.value)}
			/>
			<button type='submit' disabled={!search}>Buscar</button>
		</SearchContainer>
	)
}
