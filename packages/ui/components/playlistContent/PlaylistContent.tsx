import React from 'react';
import { Grid, Title } from '@mantine/core';
import { MovieCard } from 'card';
import { useStore } from 'store';

const PlaylistContent = () => {
	const { movies } = useStore();
	return (
		<>
			<Title sx={{ paddingBottom: '1rem' }}>Playlist</Title>
			<Grid
				sx={{
					gap: '1rem',
					flexGrow: 1,
				}}
			>
				{movies.map((movie) => (
					<MovieCard {...movie} key={movie.title} showAddButton />
				))}
			</Grid>
		</>
	);
};

export { PlaylistContent };
