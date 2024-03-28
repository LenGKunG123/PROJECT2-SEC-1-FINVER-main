async function getSongs(url) {
  try {
    const data = await fetch(url); //GET method
    const items = await data.json();
    return items;
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

async function fetchData(url){
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`)
    }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }

}


async function getSongByName(url, name) {
  try {
    const data = await fetch(url);
    const albums = await data.json();
    
    // Iterate through each album to find the song by name
    for (const albumKey in albums) {
      const album = albums[albumKey];
      const foundSong = album.tracks.find(song => song.name.toLowerCase() === name.toLowerCase());

      // If exact match not found, try matching with spaces removed
      if (!foundSong) {
        const foundSongWithSpaceRemoved = album.tracks.find(song => song.name.toLowerCase().replace(/\s/g, '') === name.toLowerCase().replace(/\s/g, ''));
        if (foundSongWithSpaceRemoved) {
          return foundSongWithSpaceRemoved;
        }
      } else {
        return foundSong;
      }
    }
    
    // Song not found
    return null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

async function deleteItemById(url, id) {
  console.log(`${url}/${id}`);
  try {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    return res.status;
  } catch (error) {
    console.log(`error: ${error}`);
  }
}



async function addItem(url, newItem) {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...newItem,
      }),
    });
    const addedItem = await res.json();
    return addedItem;
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

async function editItem(url, id, editItem) {
  try {
    const res = fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ...editItem,
      }),
    });
    const editedItem = await res.json();
    return editedItem;
  } catch (error) {
    console.log(`error: ${error}`);
  }
}




export { getSongs, getSongByName, fetchData, deleteItemById, addItem};
