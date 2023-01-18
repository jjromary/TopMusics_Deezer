import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { TracksContext } from '../../Context/TracksContext'
import { api } from '../../lib/axios'
import { SearchContainer } from './styles'

export function SearchForm() {

	const { search, setSearch, setFetchTrack, setisVisibleSearchResult } = useContext(TracksContext)

	const loadFecthTrack = async (e: React.FormEvent) => {
		e.preventDefault();

		const response = await api.get('/search/', {
			params: {
				q: search,
			}
		})
		setisVisibleSearchResult(true)
		setFetchTrack(response.data.data)
	}

	useEffect(() => {
		if (search.length > 2) {
			loadFecthTrack
		} else if (search.length === 0) {
			< Navigate to="/home" replace={true} />
			setisVisibleSearchResult(false)
		}
	}, [search])

	return (
		<SearchContainer onSubmit={loadFecthTrack}>
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
