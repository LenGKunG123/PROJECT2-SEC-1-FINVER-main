<script setup>
import Sidebar from '../components/Sidebar.vue'
import MusicPlayer from '@/components/MusicPlayer.vue';
</script>

<template>
  <MusicPlayer v-if="currentTrack"/>
  <Sidebar />
  <div class="ml-60">
    <div class="spotify-playlists">
      <h2 class="mt-16">Recently Played</h2>
      <div class="list space-x-5">
        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2018/06/17/10/38/artist-3480274_1280.jpg" class="h-36 object-cover"/>
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Today's Top Hits</h4>
          <p>Rema & Selena Gomez are on top of the...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>RapCaviar</h4>
          <p>New Music from Lil Baby, Juice WRLD an...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2020/02/02/03/44/woman-4811942_1280.png" class="h-36 object-cover"/>
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>All out 2010s</h4>
          <p>The biggest spmgs pf tje 2010s. Cover:...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2022/08/21/21/24/colours-7402147_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Rock Classics</h4>
          <p>Rock Legends & epic songs that continue t...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2018/01/16/16/46/adult-3086302_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Chill Hits</h4>
          <p>Kick back to the best new and recent chill...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2020/05/17/20/27/street-5183453_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Viva Latino</h4>
          <p>Today's top Latin hits elevando nuestra...</p>
        </div>  

        
      </div>
    </div>

    <div class="spotify-playlists">
      <h2>Made for you</h2>
      <div class="list space-x-5">
        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/11/12/16/45/people-2943124_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Peaceful Piano</h4>
          <p>Relax and indulge with beautiful piano pieces</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_960_720.jpg"  class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Deep Focus</h4>
          <p>Keep calm and focus with ambient and pos...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2020/06/20/16/32/dance-5321562_1280.jpg"  class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Instrumental Study</h4>
          <p>Focus with soft study music in the...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/08/10/08/22/dj-2619946_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>chill lofi study beats</h4>
          <p>The perfect study beats, twenty four...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/08/02/19/09/people-2572971_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Coding Mode</h4>
          <p>Dedicated to all the programmers out there.</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/08/07/23/29/crafts-2609150_1280.jpg" class="h-36 object-cover"  />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Focus Flow</h4>
          <p>Uptempo instrumental hip hop beats.</p>
        </div>

        
      </div>
    </div>

    <div class="spotify-playlists">
      <h2>Recommended</h2>
      <div class="list space-x-5">
        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2020/03/09/01/28/guitarist-4914149_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Mood Booster</h4>
          <p>Get happy with today's dose of feel-good...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/07/31/22/04/people-2561506_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Feelin' Good</h4>
          <p>Feel good with this positively timeless...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2018/03/09/17/46/fashion-3212158_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Dark & Stormy</h4>
          <p>Beautifully dark, dramatic tracks.</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/08/06/09/52/guy-2590812_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Feel Good Piano</h4>
          <p>Happy vibes for an upbeat morning.</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2017/07/18/10/30/party-2515428_1280.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Feelin' Myself</h4>
          <p>The hip-hop playlist that's a whole mood...</p>
        </div>

        <div class="item">
          <img src="https://cdn.pixabay.com/photo/2018/05/03/00/56/people-3370203_960_720.jpg" class="h-36 object-cover" />
          <div class="play">
            <span class="fa fa-play"></span>
          </div>
          <h4>Chill Tracks</h4>
          <p>Softer kinda dance</p>
        </div>        
      </div>
      <hr />
    </div>
  </div>
</template>

<style scoped>
.spotify-playlists {
  padding: 20px 100px;
}

.spotify-playlists h2 {
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 20px;
}

.spotify-playlists .list {
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.spotify-playlists .list .item {  
  width: 200px;
  padding: 15px;
  background-color: #181818;
  border-radius: 6px;
  cursor: pointer;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover {
  background-color: #252525;
}

.spotify-playlists .list .item img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
}

.spotify-playlists .list .item .play {
  position: relative;
}

.spotify-playlists .list .item .play .fa {
  position: absolute;
  right: 55px;
  top: -60px;
  padding: 18px;
  background-color: #2ff6da;
  border-radius: 100%;
  opacity: 0;
  transition: all ease 0.4s;
}

.spotify-playlists .list .item:hover .play .fa {
  opacity: 1;
  transform: translateY(-20px);
}

.spotify-playlists .list .item h4 {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-playlists .list .item p {
  color: #989898;
  font-size: 12px;
  line-height: 20px;
  font-weight: 600;
}

.spotify-playlists hr {
  margin: 70px 0px 0px;
  border-color: #636363;
}
</style>
