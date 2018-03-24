var playlist = {
 MyRiot: 'Sen',
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist.artistName;
}
