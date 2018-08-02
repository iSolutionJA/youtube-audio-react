const defaultState = {
	isPlaying: false,
	videoId: 0,
};

const player = (state = defaultState, action) => {
	switch (action.type) {
	case 'PLAY':
		return Object.assign({}, state, {isPlaying: true, videoId: action.videoId});
	case 'PAUSE':
		return Object.assign({}, state, {isPlaying: false});
	default:
		return state;
	}
};

export default player;
